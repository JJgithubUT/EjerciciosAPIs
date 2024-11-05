const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEK = '860c0bea7c5bf2e4b7920c986434d4eb';
const API_KEK_2 = '5feb021e54bb530cb784904e228e5013';

async function getClime(lat, lon) {
    const result = await fetch(URL_BASE + `lat=${lat}&lon=${lon}&appid=${API_KEK}&units=metric`);
    const data = await result.json();
    console.log(data);
}

navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    getClime(pos.coords.latitude, pos.coords.longitude);
});

// lat={lat}&lon={lon}&appid={API key}