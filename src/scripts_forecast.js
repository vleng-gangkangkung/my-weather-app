function displayForecast() {
  let forecastElement = document.querySelector("#weather-forecast");

  let forecastHTML = "";

  forecastHTML.innerHTML = `
    <div class="col-2 forecast-dayDate">
            <div class="border-dates">
              <div class="day" id="dayForecast">THU</div>
              <div id="dateForecast">26/09</div>
            </div>
            <img
                src="images/09d.svg"
                alt="icon"
                width="90px"
                class="weather-icons" id="forecast-icon"
              />
              <div class="forecastTemperature" id="forecast-temp">18<span class="celcius">&#176;</div>
          </div>
`;
}
