const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'].filter(town => town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs");
        const town = document.querySelector('li.active a').textContent;
        towns.forEach(town => {

            if (town == "Home") {
                    let card = document.createElement('section')
                    let div = document.createElement('div')
                    let h3 = document.createElement('h3');
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    let p3 = document.createElement('p');
                    let p4 = document.createElement('p');
                    let image = document.createElement('img');

                    div.setAttribute('class', 'townData')
                    h3.textContent = town.name;
                    h3.setAttribute('class', 'townName');
                    p1.textContent = town.motto;
                    p1.setAttribute('class', 'townMoto');
                    p2.textContent = "Year Founded: " + town.yearFounded;
                    p3.textContent = "Population: " + town.currentPopulation;
                    p4.textContent = "Annual Rain Fall: " + town.averageRainfall;
                    image.setAttribute('src', `images/home/${town.photo}`);
                    image.setAttribute('alt', town.name);

                    div.appendChild(h3);
                    div.appendChild(p1);
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(p4);
                    card.appendChild(div);
                    card.appendChild(image);

                    document.querySelector('div.cards').appendChild(card);
                }
            else {
                let lon;
                let lat;
                switch(town){
                    case "Preston":
                        lon = -111.876617;
                        lat = 42.09631;
                        break;
                    case "Soda Springs":
                        lon = -111.604668;
                        lat = 42.654369;
                        break;
                    case "Fish Haven":
                        lon = -111.3960;
                        lat = 42.0372;
                        break;
                    
                }
                const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=22455bdc10c7747a36acde666eceef78&units=imperial`;
                fetch(requestURL)
                    .then((response) => response.json())
                    .then((jsObject) => {
                        // console.log(jsObject);
                        let high = jsObject.main.temp_max;
                        let temp = jsObject.main.temp;
                        let speed = jsObject.wind.speed;
                        let windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
                        document.getElementsByClassName('humidity').textContent = jsObject.main.humidity;
                        document.getElementsByClassName('current').textContent = jsObject.weather[0].description;
                        document.getElementsByClassName('current-temp').textContent = Math.round(t);
                        document.getElementsByClassName('high').innerHTML = `${Math.round(highT)}&deg;F`;
                        document.getElementsByClassName('wind').textContent = Math.round(s);
                        if (t <= 50 && s >= 3.0) {
                            document.querySelector(".windeed").innerHTML = Math.round(windchill);
                        }
                        else {
                            document.querySelector(".windspeed").innerHTML = "Wind Chill: N/A";
                        }

                    });

                //Weekly Forecast
                const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=22455bdc10c7747a36acde666eceef78&units=imperial`;
                fetch(forecastURL)
                    .then((response) => response.json())
                    .then((jsObject) => {
                        const fiveDay = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
                        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
                        let i = 1;

                        fiveDay.forEach(forecast => {
                            const day = forecast.dt_txt;
                            let d = new Date(day).getDay()
                            const srcset = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                            document.querySelector(`.day${i}`).textContent = weekdays[d];
                            document.querySelector(`.forecast${i}`).innerHTML = Math.round(forecast.main.temp) + "&deg;F";
                            document.querySelector(`.icon${i}`).setAttribute('src', srcset);
                            document.querySelector(`.icon${i}`).setAttribute('alt', forecast.weather[0].description);
                            i++;
                        });
                    });

                // if(town.name == town){
                // let h3 = document.createElement('h3');
                // let event = town.events;
                // let list = document.createElement('ul'); 
                // let eventsDiv = document.querySelector("#upcomingEvents");
                // events.forEach(event => {
                //     let li =document.createElement('li');
                //     li.textContent = event;
                //     eventList.appendChild(li);
                // }); 
                // eventHeader.textContent= `${town.name} Upcomming events`;
                // eventsDiv.appendChild(eventHeader);
                // eventsDiv.appendChild(eventList);
                // }

            }
        });

    });