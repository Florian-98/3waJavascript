class Animal {
  constructor(name) {
    // console.log(this);
    this.name = name;
  }
  speak(words) {
    console.log(this.name, words);
  }
}

class Dog extends Animal {

}

class Cat extends Animal {

}
let cat = new Cat('Oasis');
console.log(cat.speak('miaou'));
let dog = new Dog ('Nala');
console.log(dog.speak('wouf wouf'));

// new Animal();           //nom de classes avec une majuscule !!!
//
// let animal = new Animal('Oasis');
// console.log(animal.speak());
