require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const demo = {
  origin: 'JFK',
  destination: 'LAX',
  departuredate: '2018-11-13',
  returndate: '2018-11-20',
  onlineitinerariesonly: 'N',
  limit: 1,
  offset: 1,
  eticketsonly: 'N',
  sortby: 'totalfare',
  order: 'asc',
  sortby2: 'departuretime',
  order2: 'asc',
  pointofsalecountry: 'US',
};

module.exports = {
  siteMetadata: {
    title: 'Flight Matrix',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-sabre',
      options: {
        token: process.env.SABRE_ACCESS_TOKEN,
        url: demo,
      },
    },
  ],
};
