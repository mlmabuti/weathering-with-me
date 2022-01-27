console.log("client side js has loaded.");

fetch("http://localhost:3000/weather?address=Philippines").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecastData);
    }
  });
});
