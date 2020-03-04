let person = {
  "name": "laurent",
  "address": "Boulevard Mireille Lauze",
  "zipcode": "13010",
  "city" : "Marseille"
};

let person2 = {
  "name": "oasis",
  "address": "29 rue de l'ecole",
  "zipcode": "13100",
  "city" : "Aix en provence"
};

let person3 = {
  "name": "flo",
  "address": "29 rue de l'ecole",
  "zipcode": "13100",
  "city" : "Aix en provence"
};


console.log(person);

let thingsToStore = [person, person2];

thingsToStore.push(person3);

let persons = JSON.parse(localStorage.getItem('person'));

for (let person of persons) {
  console.log(person.name);
}

if (localStorage.setItem('person',JSON.stringify(thingsToStore))) {
  console.info(JSON.stringify(person));
 } else {
  console.error('Error');
}


let me = '';
if(me = localStorage.getItem('person')) {
  console.log(JSON.parse(me));
}
