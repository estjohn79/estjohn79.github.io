let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=01ff088a8bdceb091339776b47ce2ce8';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('wispeed').innerHTML = weatherData.wind.speed;
    document.getElementById('hightemp').innerHTML = weatherData.main.temp_max;



    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather.description;

    document.getElementById("cc-img").setAttribute('src', icon);
    document.getElementById("cc-img").setAttribute('alt', desc);
}