import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

geocode("Quezon City Philippines", (error, data) => {
  console.log(error ?? data);
  forecast(data.lat, data.lon, (error, forecastData) => {
    console.log(error ?? `Location: ${data.loc}\n${forecastData}`);
  });
});
