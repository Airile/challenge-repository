// display the current date and time using JavaScript: Tuesday 16:00

// function for fomatting the current date and time
// also pushing it to the HTML
function formatDate() {
  // sets up the date format
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  // if minutes are less than 10 adds a 0 in front
  // otherwise its gonna look like this 14:9 instead of 14:09
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // if hours are less than 10 adds a 0 in front
  if (hours < 10) {
    hours = `0${hours}`;
  }
  // puts the current date-time in the html span
  let dateTime = document.querySelector("#date-time");
  dateTime.innerHTML = `${day} ${hours}:${minutes}`;
}

formatDate();

// form search engine
// when searching for a city display city name
// on the page after form has been submitted
// make sure that it isn't refreshing the page

function initateSearch(event) {
  // prevents page refresh
  event.preventDefault();
  // targets the h1 with the current city displayed
  let cityChange = document.querySelector("#searched-city");
  // takes the input from the form
  let input = document.querySelector("#search");
  // replaces the h1 content with the input content
  let apiKey = "o9431d13cf2b77b978e0f82t33a11a1f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}`;

  // function for updating the span
  function updateCurrentTemp(response) {
    let currentTemp = Math.round(response.data.temperature.current);
    let city = response.data.city;
    // replace the span
    let displayTemp = document.querySelector("#update-temp");
    displayTemp.innerHTML = currentTemp;
    cityChange.innerHTML = response.data.city;
  }
  // access api
  axios.get(apiUrl).then(updateCurrentTemp);
}

let searchResult = document.querySelector("#search-engine");
searchResult.addEventListener("submit", initateSearch);
