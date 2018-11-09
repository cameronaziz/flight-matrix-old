const makeKey = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const cleanItinerary = (itinerary) => {
  const { OriginDestinationOption } = itinerary.AirItinerary.OriginDestinationOptions;
  for (let i = 0; i < OriginDestinationOption.length; i += 1) {
    const { FlightSegment } = OriginDestinationOption[i];
    for (let j = 0; j < FlightSegment.length; j += 1) {
      const { AirEquipType } = FlightSegment[j].Equipment;
      FlightSegment[j].Equipment.AirEquipType = AirEquipType.toString();
    }
  }
};

module.exports = {
  makeKey,
  cleanItinerary,
};
