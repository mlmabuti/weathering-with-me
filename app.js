import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

const address = process.argv[2];

if (!address) {
  console.log("Please specify address");
} else {
  geocode(address, (error, { lat, lon, loc }) => {
    console.log(error ?? lat, lon, loc);

    forecast(lat, lon, (error, forecastData) => {
      console.log(error ?? `Location: ${loc}\n${forecastData}`);
    });
  });
}
