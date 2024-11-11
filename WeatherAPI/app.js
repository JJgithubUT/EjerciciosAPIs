//           おれの住所の情報
const URL_base = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEK = '860c0bea7c5bf2e4b7920c986434d4eb';
const API_KEK_2 = '5feb021e54bb530cb784904e228e5013';
const numeroTermometroShow = document.querySelector('#spanNumeroTermometro');
const barra1 = document.querySelector('.subbarra1');
const barra2 = document.querySelector('.subbarra2');
const botonBuscarCity = document.getElementById('botonBuscarCity');
const inputBuscarCity = document.getElementById('inputBuscarCity');

const spanNombre = document.getElementById('spanNombre');
const spanPais = document.getElementById('spanPais');
const spanClima = document.getElementById('spanClima');
const spanHora = document.getElementById('spanHora');

let data;

async function getClime(lat, lon) {
    const result = await fetch(URL_base + `lat=${lat}&lon=${lon}&appid=${API_KEK_2}&units=metric`);
    data = await result.json();
    console.log(data);

    const temperatura = data.main.temp;
    cambiarBarra(temperatura);
    numeroTermometroShow.innerText = `${temperatura}°C`;
    const nombreCiudad = data.name;
    const pais = data.sys.country;
    const clima = data.weather[0].main;
    spanNombre.innerText = nombreCiudad;
    spanPais.innerText = pais;
    spanClima.innerText = clima;

    const timestamp = data.dt;
    const timezoneOffset = data.timezone;
    const date = new Date((timestamp + timezoneOffset) * 1000);
    spanHora.innerText = date.toUTCString();
    inputBuscarCity.value = nombreCiudad;

    return data;
}

async function getClimeByCity(city) {
    const result = await fetch(URL_base + `q=${city}&appid=${API_KEK_2}&units=metric`);
    data = await result.json();
    console.log(data);
    
    const temperatura = data.main.temp;
    cambiarBarra(temperatura);
    numeroTermometroShow.innerText = `${temperatura}°C`;
    const nombreCiudad = data.name;
    const pais = data.sys.country;
    const clima = data.weather[0].main;
    spanNombre.innerText = nombreCiudad;
    spanPais.innerText = pais;
    spanClima.innerText = clima;

    const timestamp = data.dt;
    const timezoneOffset = data.timezone;
    const date = new Date((timestamp + timezoneOffset) * 1000);
    spanHora.innerText = date.toUTCString();

    return data;
}

function cambiarBarra(temperatura) {
    if (temperatura > 0) {
        barra1.style.height = `0%`;
        barra2.style.height = `0%`;
        barra1.style.height = `${ temperatura / 50 * 100 }%`;
    } else if (temperatura < 0) {
        barra1.style.height = `0%`;
        barra2.style.height = `0%`;
        barra2.style.height = `${ 0 - temperatura / 50 * 100 }%`;
        console.log(temperatura);
    } else if (temperatura === 0) {
        barra1.style.height = `0%`;
        barra2.style.height = `0%`;
    }
}

navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log(lat);
    console.log(lon);
    getClime(lat, lon);
});

botonBuscarCity.addEventListener('click', () => {
    if (inputBuscarCity.value !== "") {
        getClimeByCity(inputBuscarCity.value);
        
    }
});
