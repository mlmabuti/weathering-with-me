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

// const url =
//   "http://api.weatherstack.com/current?access_key=73665dadafeaaac2296d1c346a620642&query=37.8267,-122.4233&units=f";
//
// request({ url: url, json: true }, (error, response) => {
//   console.log(
//     `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`
//   );
// });
//
// const geoCodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicnl1d2FmZm8iLCJhIjoiY2t5aXBxcGxrMDF1dDJvcGs1bjY4M3JpeiJ9.nF1-Pq8yEBi7ELf0c_ycYg";
//
// request({ url: geoCodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("something went wrong");
//   } else if (response.body.error) {
//     console.log("unable to find location");
//   } else {
//     const lon = response.body.features[0].center[0];
//     const lat = response.body.features[0].center[1];
//
//     console.log(`the latitude is ${lat}, the longitude is ${lon}`);
//   }
// });

// const add = (a, b, callback) => { // callback is a function to be passed in
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };
//
// add(1, 4, (sum) => console.log(sum));
