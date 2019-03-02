
    var wind=50;
    var temp=50;

    var windchill=(35.7+(0.6215*temp)-(35.75*(Math.pow(wind, 0.16))+
    ((.4275*temp)*(Math.pow(wind,.16)))));

    document.getElementById("temp").innerHTML = temp;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("windchill").innerHTML = windchill;