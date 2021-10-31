function displayForecast() {
  let forecastElement = document.querySelector("#weather-forecast");
  let forecastHTML = `<span class="border-left-forecast"></span>`;
  let daysOfWeek = ["DAY1", "DAY2", "DAY3", "DAY4", "DAY5"];

  daysOfWeek.forEach((day) => {
    forecastHTML =
      forecastHTML +
      `<div class="col forecast-dayDate">
            <div class="border-dates-forecast">
              <div class="day" id="dayForecast">${day}</div>
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
  });
  forecastElement.innerHTML = forecastHTML;
}

displayForecast();

//   let apiKey = "9f2f2317935bb527c06dce1cab398efc";
//   let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
//
