const fetch = require('node-fetch');
const queryString = require('query-string');
const tools = require('./tools');

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions,
) => {
  delete configOptions.plugins;
  const { createNode } = actions;
  const apiOptions = queryString.stringify(configOptions.url);
  const url = `https://api-crt.cert.havail.sabre.com/v1/shop/flights?${apiOptions}`;
  const processItinerary = (itinerary) => {
    tools.cleanItinerary(itinerary);
    const nodeId = createNodeId(`itinerary-${tools.makeKey(10)}`);
    const nodeContent = JSON.stringify(itinerary);
    const nodeData = Object.assign({}, itinerary, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'SabreItinerary',
        content: nodeContent,
        contentDigest: createContentDigest(itinerary),
      },
    });
    return nodeData;
  };

  return (
    fetch(url, {
      headers: {
        'X-Originating-IP': '23.242.194.250',
        Authorization: `Bearer ${configOptions.token}`,
      },
    })
      .then(response => response.json())
      .then((data) => {
        data.PricedItineraries.forEach((itinerary) => {
          const nodeData = processItinerary(itinerary);
          createNode(nodeData);
        });
      })
  );
};
