import request from "request";

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=73665dadafeaaac2296d1c346a620642&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service");
    } else if (response.body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `It is ${response.body.current.weather_descriptions[0]}. The temperature is ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}.`
      );
    }
  });
};

export default forecast;
