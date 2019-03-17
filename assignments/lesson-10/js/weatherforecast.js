let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=01ff088a8bdceb091339776b47ce2ce8';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    let hightempforecast = [];
    let day = 1;


    
    forecastData.list.forEach(hour => {
        if (hour.dt_txt.includes('18:00:00')) {
            hightempforecast[day] = hour.main.temp.toFixed(0);
            day++;
        }
    });

    for (let i = 1; i<=5; i++){
        document.getElementById('forecast' + i).innerHTML = hightempforecast[i] + '&deg; F';
    }
}