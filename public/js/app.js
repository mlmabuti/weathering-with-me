console.log("client side js has loaded.");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop event from refreshing the page

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = `It is ${data.forecastData.weather}. 
                                    The temperature is ${data.forecastData.temp} degrees. 
                                    It feels like ${data.forecastData.feel}.`;
      }
    });
  });
});
