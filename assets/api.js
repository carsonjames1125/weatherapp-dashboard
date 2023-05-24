// need a function that pulls the specific elements i want from the html as well as shows and hides the elements for the starting page. 

function startPage () {
    var headerEL = document.getElementById("head");
    var searchBar = document.getElementById('search-head');
    var searchBtn = document.getElementById('searchbtn');
    var searchHisEl = document.getElementById('recentsearch');
    var cityNameEl = document.getElementById('cityname');
    var tempEl = document.getElementById('temp');
    var humidityEl = document.getElementById('hum');
    var windEl = document.getElementById('wind');
    var tempHighEl = document.getElementById('temp-max');
    var fivedayHeadEl = document.getElementById('5-day-header');
    var RecentEl = JSON.parse(localStorage.getItem('search')) || [];
}

var apiKey = '19089b90a732a9404f2f4940d37c9e3d';

