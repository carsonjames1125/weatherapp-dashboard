// need a function that pulls the specific elements i want from the html as well as shows and hides the elements for the starting page. 
    var city = "";
    var headerEL = $("#head");
    var searchBar = $('#search-head');
    var searchBtn = $('#searchbtn');
    var searchHisEl = $('#recentsearch');
    var cityNameEl = $('#cityname');
    var currentWeaIcon = $('#weathericon');
    var tempEl = $('#temp');
    var humidityEl = $('#hum');
    var windEl = $('#wind');
    var tempHighEl = $('#temp-max');
    var fivedayHeadEl = $('#5-day-header');
    var currentWeather = $('#currentWeather');
    var RecentEl = JSON.parse(localStorage.getItem('search')) || [];

//  now that i have my variables for the start page i need to use the api to get the weather for the current day and the five day forecast
    var APIKey = '19089b90a732a9404f2f4940d37c9e3d';

function getWeather(city) {
    
}
