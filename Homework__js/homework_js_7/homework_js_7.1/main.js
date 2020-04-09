let person = {};
person.firstName = "Ivan";
person.secondName = "Ivanov";
person.showData = function(){console.log(`Name: ${this.firstName}, Family: ${this.secondName}`)};

person.showData();

let newPerson = Object.assign({}, person);
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";

newPerson.showData();