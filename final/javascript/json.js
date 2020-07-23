const requestURL = 'https://jqueen3.github.io/jefferyqueen.github.io/final/data/data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const rentals = jsonObject['rentals']; 
  
        rentals.forEach(rental => {
                
            let div = document.createElement('div');
            let image = document.createElement('img'); 
            let sect = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p'); 
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');

            h3.innerHTML = rental.vehicle;
            p1.innerHTML = `Capacity: ${rental.capacity}`;
            p2.innerHTML = `Reservation: $${rental.resHalf}`;
            p3.innerHTML = `Reservation 3+ Hours: $${rental.resFull}`;
            p4.innerHTML = `Walk-In: $${rental.walkHalf}`;
            p5.innerHTML = `Walk-In 3+ Hours: $${rental.walkFull}`;
            image.setAttribute('src', rental.pic);
            image.setAttribute('alt', rental.vehicle);

            div.appendChild(sect);
            div.appendChild(image);
            sect.appendChild(h3);
            sect.appendChild(p1);
            sect.appendChild(p2);
            sect.appendChild(p3);
            sect.appendChild(p4);
            sect.appendChild(p5);

            document.querySelector('div.json').appendChild(div1);
        });
    });