function windchill() {
    wind=50;
    temp=50;

    chill=(35.7+(0.6215*temp)-(35.75*(Math.pow(wind, 0.16))+
    ((.4275*temp)*(Math.pow(wind,.16)))));

    document.getElementById("windchill").innerHTML = chill;
}