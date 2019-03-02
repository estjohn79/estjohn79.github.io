
    let wind=document.getElementById("value2").innerHTML; 
    let temp=document.getElementById("value5").innerHTML;

    let windchill=(35.7+(0.6215*temp)-(35.75*(Math.pow(wind, 0.16))+
    ((.4275*temp)*(Math.pow(wind,.16)))));

    document.getElementById("windchill").innerHTML = windchill;