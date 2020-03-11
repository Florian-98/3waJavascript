class LocalStorage {


     addToLocalStorage(key, items) {
        return localStorage.setItem(key, JSON.stringify(items));
    }

     getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

     deleteContactFromLocalStorage(key) {
        return localStorage.removeItem(key);
    }

}
