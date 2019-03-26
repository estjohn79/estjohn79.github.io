let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=01ff088a8bdceb091339776b47ce2ce8';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function () {
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

    var dayName = new Array(7);
    dayName[0] = "Sunday";
    dayName[1] = "Monday";
    dayName[2] = "Tuesday";
    dayName[3] = "Wednesday";
    dayName[4] = "Thursday";
    dayName[5] = "Friday";
    dayName[6] = "Saturday";

    var j = today.getDay();
    for (let i = 1; i <= 5; i++) {
        document.getElementById('forecast' + i).innerHTML = hightempforecast[i] + '&deg; F';
        if (j <= 6) {
            document.getElementById('dayName' + i).innerHTML = dayName[j];
        }
        else {
            j = 0;
            document.getElementById('dayName' + i).innerHTML = dayName[j];
        }
        j++
    }}