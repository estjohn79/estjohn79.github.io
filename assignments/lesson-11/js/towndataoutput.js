          const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
          let request = new XMLHttpRequest();
          request.open('GET', requestURL);
          request.responseType = 'json';
          request.send();
            
          request.onload = function() {
	        let towndata = request.response;
            let towns = towndata['towns']; 
            
            let output = document.querySelector('article');

            towns.forEach(town => {
                    if (town.name == 'Preston') {
                        let article = document.createElement('p');
                        let name = document.createElement('h1');
                        let motto = document.createElement('p');
                        
                        let year = document.createElement('p');
                        let pop = document.createElement('p');
                        let rain = document.createElement('p');
                        let x = document.createElement("img");
                        
                        name.textContent = town.name;
                        motto.textContent = town.motto;
                        year.textContent = 'Year Founded: ' + town.yearFounded;
                        pop.textContent = 'Population: ' + town.currentPopulation;
                        rain.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

                        motto.setAttribute("class", "jsonmotto");
                        x.setAttribute("src", "images/preston.jpg");
                        x.setAttribute("alt", "Preston");
                        
                        article.appendChild(name);
                        article.appendChild(motto);
                        article.appendChild(year);
                        article.appendChild(pop);
                        article.appendChild(rain);
                        article.appendChild(x);
                        output.appendChild(article);
                    }
                });

                towns.forEach(town => {
                    if (town.name == 'Fish Haven') {
                        let article = document.createElement('p');
                        let name = document.createElement('h1');
                        let motto = document.createElement('p');
                        
                        let year = document.createElement('p');
                        let pop = document.createElement('p');
                        let rain = document.createElement('p');
                        let x = document.createElement("img");
                        
                        name.textContent = town.name;
                        motto.textContent = town.motto;
                        year.textContent = 'Year Founded: ' + town.yearFounded;
                        pop.textContent = 'Population: ' + town.currentPopulation;
                        rain.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

                        motto.setAttribute("class", "jsonmotto");
                        x.setAttribute("src", "images/fish.jpg");
                        x.setAttribute("alt", "Fish Haven");
                        
                        article.appendChild(name);
                        article.appendChild(motto);
                        article.appendChild(year);
                        article.appendChild(pop);
                        article.appendChild(rain);
                        article.appendChild(x);
                        output.appendChild(article);
                    }
                });

                towns.forEach(town => {
                    if (town.name == 'Soda Springs') {
                        let article = document.createElement('p');
                        let name = document.createElement('h1');
                        let motto = document.createElement('p');
                        
                        let year = document.createElement('p');
                        let pop = document.createElement('p');
                        let rain = document.createElement('p');
                        let x = document.createElement("img");
                        
                        name.textContent = town.name;
                        motto.textContent = town.motto;
                        year.textContent = 'Year Founded: ' + town.yearFounded;
                        pop.textContent = 'Population: ' + town.currentPopulation;
                        rain.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

                        motto.setAttribute("class", "jsonmotto");
                        x.setAttribute("src", "images/sodasprings.jpg");
                        x.setAttribute("alt", "Soda Springs");
                        
                        article.appendChild(name);
                        article.appendChild(motto);
                        article.appendChild(year);
                        article.appendChild(pop);
                        article.appendChild(rain);
                        article.appendChild(x);
                        output.appendChild(article);
                    }
                });
            };
