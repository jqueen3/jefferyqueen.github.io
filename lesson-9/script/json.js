const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);
    const town = jsonObject['towns'];
    
    town.forEach(town => {
        if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven") {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let img = document.createElement('picture');

        h2.innerHTML = `${town.name}`
        p1.innerHTML = `${town.motto}`
        p2.innerHTML = `<strong>Year Founded: ${town.yearFounded} </strong>`
        p3.innerHTML = `<strong>Current Population: ${town.currentPopulation}</strong>`
        p4.innerHTML = `<strong>Average Rainfall: ${town.averageRainfall} inches</strong>`
        img.innerHTML = `<div class="imagediv"><img src ="${town.photo}" alt="Landscape in ${town.name}"></div>`

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(img);


        document.querySelector('div.towninfo').appendChild(card);
        
    }});
  });
