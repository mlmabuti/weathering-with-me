import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

geocode("Quezon City Philippines", (error, { lat, lon, loc }) => {
  console.log(error ?? lat, lon, loc);
  forecast(lat, lon, (error, forecastData) => {
    console.log(error ?? `Location: ${loc}\n${forecastData}`);
  });
});
