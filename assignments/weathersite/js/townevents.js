let div = document.getElementById('events');

let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let Data = request.response;
    let Array = Data['towns'];
    let name = document.getElementById('townname').innerHTML;

    for (let i = 0; i < Array.length; i++) {
        if (Array[i].name.includes(name)) {    
            let events = Array[i]['events'];
            let eventsList = document.createElement('ul');
            let name = document.getElementById('townname').innerHTML;
            for (let j = 0; j < events.length; j++) { 
                let listItem = document.createElement('li');
                listItem.textContent = events[j];

                eventsList.appendChild(listItem);
                div.appendChild(eventsList);
            }         
        }
    }
}


