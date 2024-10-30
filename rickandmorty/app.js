const URL_BASE = 'https://rickandmortyapi.com/api';
const container = document.querySelector('.container');

function createUl(characters) {
    const ul = document.createElement('ul');
    characters.forEach(character => {
        const li = document.createElement('li');
        li.innerText = character.name;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

function createCard(character) {
    const card = document.createElement('div');
    let htmlObj = `
    <img src=''>
    <div>
        <h1>${ character.name }</h1>
        <p>${ character.status } - ${ character.species }</p>
        <p>Última ubicación</p>
        <p>UTT</p>
        <p>Primera Aparición</p>
        <p>UTT</p>
    </div>
    `;
    card.innerHTML = htmlObj;
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