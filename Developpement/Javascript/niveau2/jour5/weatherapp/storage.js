function initStorage() {
    city = 'Saint-Lubin-des-Joncherets';
    state = 'FR';

    return {
        city: city,
        state: state,
    };
}



// const { city, state } = initStorage();




function storageGetLocationData() {
    if (localStorage.getItem('city') === null) {
        city = initStorage().city;
    } else {
        city = localStorage.getItem('city');
    }

    if (localStorage.getItem('state') === null) {
        state = initStorage().state;
    } else {
        state = localStorage.getItem('state');
    }

    return {
        city: city,
        state: state,
    };
}

function storageSetLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
}
