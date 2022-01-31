const searchBtn = document.querySelector("#search-btn");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const timeElement = document.querySelector("#time");
const summaryElement = document.querySelector("#summary");
const tempElement = document.querySelector("#temp");
const humidityElement = document.querySelector("#humidity");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stop event from refreshing the page

  const location = search.value;

  messageOne.textContent = "Loading...";
  timeElement.textContent = "";
  summaryElement.textContent = "";
  tempElement.textContent = "";
  humidityElement.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        timeElement.textContent = data.forecastData.time;
        summaryElement.textContent = data.forecastData.weather;
        tempElement.textContent = `${data.forecastData.temp}°C`;
        humidityElement.textContent = `${data.forecastData.humidity}%`;
      }
    });
  });
});
