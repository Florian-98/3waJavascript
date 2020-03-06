let CITY_ID = '';
const API_KEY = '77a521742e7946551b28e07e159240b2';
// API DOCS: https://openweathermap.org/current;

function initWeather(city, state) {
    city = city;
    state = state;
}

async function weatherGetWeather() {
    // let url = `http://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
}

// Change weather location
function weatherChangeLocation(city, state) {
    city = city;
    state = state;
}
