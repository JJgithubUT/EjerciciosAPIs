const URL_BASE = 'https://rickandmortyapi.com/api';
fetch(URL_BASE + '/character')
    .then(response => response.json())
    .then(datos => {
        const info = datos.info;
        const characters = datos.results;
        characters.forEach(c => {
            console.log(c.name);
        });
    });