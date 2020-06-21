
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach (prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let img = document.createElement('img');
        let p2 = document.createElement('p');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p1.innerHTML =  `<strong>Date of Birth: ${prophet.birthdate} </strong>`;
        p2.innerHTML = `Place of Birth: ${prophet.birthplace}`
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `${prophet.name} ${prophet.lastname}`)

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
    });

  });



