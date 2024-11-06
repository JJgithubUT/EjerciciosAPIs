const URL_base = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEK = '860c0bea7c5bf2e4b7920c986434d4eb';
const API_KEK_2 = '5feb021e54bb530cb784904e228e5013';
const cuerpo = document.querySelector('body');

let data;

async function getClime(lat, lon) {
    const result = await fetch(URL_base + `lat=${lat}&lon=${lon}&appid=${API_KEK_2}&units=metric`);
    data = await result.json();
    console.log(data);
}

navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    console.log(lat);
    console.log(lon);
    getClime(lat, lon);
    cuerpo.style.backgroundColor = 'aqua';
});

