// need variables 
// need api call functions 
// need local storage 
// need to pull api call data and parse into what i need from the data

var APIKey = "19089b90a732a9404f2f4940d37c9e3d";
var citySearch = document.querySelector('#searchinput');
var currentWeather = document.querySelector('#currentWeather');
var fiveDayForecast = document.querySelector('#fiveday');
var recentHis = document.querySelector('#recentsearch');
var searchHis = [];

function startPage (event) {
    event.preventDafault();
    var city = citySearch.value;
    displayCurrWeather(city);
}

function displayCurrWeather(city) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
            
        })
        .then(function (currentWeather){
            console.log(currentWeather);
            var lat = response.currentWeather.coord.lat;
            var lon = response.currentWeather.coord.lat;
            var currentWeatherData = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            fetch(currentWeatherData)
            .then(function(response){
                return response.json();
            })
            .then(function (fivedayforecast){
               if(searchHis.includes(currentWeatherData.name) === false) {
                searchHis.push(currentWeatherData.name);
                localStorage.setItem('city', json.stringify(fivedayforecast))
               }
               displayCity();
               console.log(fivedayforecast);
               currentWeather.innerHTML = displayCurrWeather(city);
            })
            })
        }
    
function displayWeather () {
    if(localStorage.getItem('city')) {
        searchHis = JSON.parse(localStorage.getItem('city'));
    }
    var cities = '';
    for (var i = 0; i < searchHis.length; i++) {
    }
    recentHis.innerHTML = cities;
    var searchBtn = document.querySelector('#searchbtn');
    for (var i = 0; i < searchBtn.length; i++) {
        searchBtn.addEventListener("click", function() {
            displayCurrWeather(this.textcontent);
        });
    }
}
displayWeather();


