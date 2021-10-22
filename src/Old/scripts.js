///---------API CALL FUNCTION-----------///
function searching(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchInput.value.toUpperCase();
  let citySearch = searchInput.value;

  let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", searching);

///--------- GET CURRENT LOCATION FUNCTION ------------///

function getLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "701239fef296828e0d2dfbfb4ce41702";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(displayName);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
let locationBtn = document.querySelector("#current-location");
locationBtn.addEventListener("click", getCurrentPosition);

///--------- CHNAGE CITY NAME------------///
function displayName(response) {
  let currentCity = response.data.name;
  let currentCityDisplayed = document.querySelector("#city-name");
  currentCityDisplayed.innerHTML = currentCity.toUpperCase();
}
//
///--------- SHOW TEMPERATURE FUNCTION GET & DISPLAY TEMPERATURE ------------///
function showTemperature(response) {
  let temp = Math.floor(response.data.main.temp);
  let temperature = document.querySelector("#main-temp-display");
  temperature.innerHTML = temp;

  // Display Main Description//
  let weatherDescription = response.data.weather[0].description;
  let description = document.querySelector("#weather-description");
  description.innerHTML = weatherDescription;

  // Display Humidity Description//
  let humidityValue = response.data.main.humidity;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity is ${humidityValue}%`;

  // Display Wind Description//
  let windSpeed = response.data.wind.speed;
  let realFeel = response.data.main.feels_like;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind speed ${windSpeed}mph, Feels like ${realFeel}°C`;

  ///---------CONVERT UNITS C TO F TO C------------///
  // --to fahrneheit---///
  function convertToFarenheit(event) {
    let tempValueCelcius = temp;
    let farenheitTemp = (tempValueCelcius * 9) / 5 + 32;
    let mainTempDisplay = document.querySelector("#main-temp-display");
    mainTempDisplay.innerHTML = Math.ceil(farenheitTemp);
  }

  let farenheitBtn = document.querySelector("#deg-farenheit");
  farenheitBtn.addEventListener("click", convertToFarenheit);

  ///---to celcius---///
  function convertToCelcius(event) {
    let mainTempDisplay = document.querySelector("#main-temp-display");
    mainTempDisplay.innerHTML = temp;
  }

  let celciusBtn = document.querySelector("#deg-celcius");
  celciusBtn.addEventListener("click", convertToCelcius);

  ///
}

//--------- CHNAGE STYLE OF UNIT OF MEASUREMENT ------------///
function changeToBigC() {
  let element = document.getElementById("#deg-celcius");
  element.classList.replace("celcius", "bigCelcius");
}

function changeToBigF() {
  let element = document.getElementById("#deg-farenheit");
  element.classList.remove("fahrenheit");
  element.classList.add("bigFarenheit");
}
///--------- END OF SHOW TEMPERATRE FUNCTION GET & DISPLAY TEMPERATURE ------------///

///---------BG COLOR TOGGLE------------///
//DAYTIME/EVENING TOGGLE
function changeLight() {
  document.getElementById("panel").classList.remove("darkClass");
  document.getElementById("panel").classList.add("lightClass");
}

function changeDark() {
  document.getElementById("panel").classList.remove("lightClass");
  document.getElementById("panel").classList.add("darkClass");
}

///---------SEPARATE FUNCTION OR ITEMS------------///

///---------CURRENT DATE & TIME & MONTH ------------///
let now = new Date();

//TIME
let time = now.toLocaleTimeString([], {
  hourCycle: "h23",
  hour: "2-digit",
  minute: "2-digit",
});

let currentTime = document.querySelector("#time");
currentTime.innerHTML = time;

// DAY OF THE WEEK // MAPPING
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDay = document.querySelector("#day-name");
currentDay.innerHTML = day;

//DATE
let date = now.getDate();
let currenDate = document.querySelector("#date");
currenDate.innerHTML = date;

// CURRENT MONTH
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];
let currentMonth = document.querySelector("#month");
currentMonth.innerHTML = month;
