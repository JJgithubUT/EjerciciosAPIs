const URL_BASE = 'https://rickandmortyapi.com/api';
const container = document.querySelector('.container');

function createCard(character) {
    const card = document.createElement('div');
    let htmlObj = `
    <img src='${ character.image }'>
    <div>
        <h1 style="color: aqua;">${ character.name }</h1>
        <p>${ character.status } - ${ character.species }</p>
        <p>Última ubicación</p>
        <p>${ character.location.name }</p>
        <p>Primera Aparición</p>
        <p>UTT</p>
    </div>
    `;
    card.innerHTML = htmlObj;
    card.className = 'card';
    return card;
}

function createCards(characters) {
    characters.forEach(c => {
        container.appendChild(createCard(c));
    });
}

fetch(URL_BASE + '/character')
    .then(response => response.json())
    .then(datos => {
        const info = datos.info;
        const characters = datos.results;
        createCards(characters);
    });