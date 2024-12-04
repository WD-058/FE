// import { ducks } from './ducks.js';

const summonBtn = document.querySelector('#summon');
const pond = document.querySelector('#pond');
const addForm = document.querySelector('#add-form');
// console.log(ducks);

//to save to localStorage must use JSON.stringify()
// const ducksJSON = JSON.stringify(ducks);
// console.log(typeof ducksJSON);

// const ducksObj = JSON.parse(ducksJSON);

// console.log(ducksObj);

const renderDucks = (ducksArray) => {
    pond.innerHTML = '';
    console.log(ducksArray);
    ducksArray.forEach((duck) => {
        pond.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
        <img
        src=${duck.imgUrl}
        alt=${duck.name} />
        </figure>
        <div class="card-body">
        <h2 class="card-title">${duck.name}</h2>
        <p>${duck.quote}</p>
        </div>
        </div>`;
    });
};

const errorHandler = (error) => {
    console.error(error);
    const h2 = document.createElement('h2');
    h2.classList.add(
        'inline-block',
        'm-auto',
        'text-6xl',
        'mb-6',
        'text-red-600'
    );
    h2.textContent = error;
    pond.appendChild(h2);
};

// summonBtn.addEventListener('click', () => {
//     fetch('https://duckpond-89zn.onrender.com/ducks')
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error(`${res.status}. Something went wrong!`);
//             }
//             return res.json();
//         })
//         .then((data) => renderDucks(data))
//         .catch((err) => errorHandler(err));
// });

summonBtn.addEventListener('click', async () => {
    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks');
        if (!res.ok) {
            throw new Error(`${res.status}. Something went wrong!`);
        }
        const data = await res.json();
        renderDucks(data);
    } catch (err) {
        errorHandler(err);
    }
});

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const name = document.getElementById('name');
        const imgUrl = document.getElementById('img-url');
        const quote = document.getElementById('quote');

        const res = await fetch('https://duckpond-89zn.onrender.com/ducks', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                imgUrl: imgUrl.value,
                quote: quote.value,
            }),
        });
        const data = await res.json();
        renderDucks(data);

        addForm.reset();
    } catch (error) {}
});
