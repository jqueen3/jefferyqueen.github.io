const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=22455bdc10c7747a36acde666eceef78&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    const weather = jsonObject['condition'];
    weather.forEach(condition => {
        if (condition == "description") {
            let p1 = document.createElement('p');

            p1.innerHTML = `${weather.description}`


        }

    })
        



  });
