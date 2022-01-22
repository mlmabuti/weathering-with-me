import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

geocode("Quezon City Philippines", (error, data) => {
  console.log(error ?? data);
});

forecast(-75, 44, (error, data) => {
  console.log(error);
  console.log(data);
});
