
    let temp=document.getElementById("hightemp").innerHTML; 
    let wind=document.getElementById("wispeed").innerHTML;

    let windchill=(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp *Math.pow(wind,.16)).toFixed(0);

    document.getElementById("windchill").innerHTML = windchill;