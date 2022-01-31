import request from "request";

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d1f5b90f4129ff91c116dfdea1dd08a3&query=${latitude},${longitude}`;
  // d1f5b90f4129ff91c116dfdea1dd08a3 73665dadafeaaac2296d1c346a620642
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service");
    } else if (body.error) {
      callback("Unable to find location or service is unavailable.");
    } else {
      callback(undefined, {
        weather: body.current.weather_descriptions[0],
        temp: body.current.temperature,
        time: body.current.observation_time,
        humidity: body.current.humidity,
      });
    }
  });
};

export default forecast;
