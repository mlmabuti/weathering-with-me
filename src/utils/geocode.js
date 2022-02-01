import request from "request";

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoicnl1d2FmZm8iLCJhIjoiY2t5aXBxcGxrMDF1dDJvcGs1bjY4M3JpeiJ9.nF1-Pq8yEBi7ELf0c_ycYg`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to server.");
    } else if (body.features.length === 0) {
      callback("No results found.");
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lon: body.features[0].center[0],
        loc: body.features[0].place_name,
      });
    }
  });
};

export default geocode;
