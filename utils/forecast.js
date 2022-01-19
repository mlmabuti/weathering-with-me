import request from "request";

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=73665dadafeaaac2296d1c346a620642&query=${latitude},${longitude}&units=f`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Low level error");
    } else if (response.body.success === false) {
      callback("Coordinate error");
    } else {
      callback(undefined, {
        desc: response.body.current.weather_descriptions[0],
        temp: response.body.current.temperature,
        feel: response.body.current.feelslike,
      });
    }
  });
};

export default forecast;
