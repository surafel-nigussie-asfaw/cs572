var count = 99;
let counter = {
  count: 0,
  increment(){
    var count = 10;
    setInterval(() => {console.log(++this.count);}, 1000)
  }
}
let test = counter.increment;
test();

//function call
function getName(name){
  this.name = name;
}

const person = getName('Abebe');
console.log(person)//Undefined
console.log(window.name)//Abebe

//constructor call
function Person(name){
	console.log(this)//{}
  this.name = name;
}

let person = new Person('Abebe')

console.log(person.name)//Abebe
console.log(window.name)//undefined

//method call
var count = 10;
var obj = {
	count: 20,
  counter (){
  	console.log(this.count);//20
  }
}

obj.counter()

//call vs apply, a temporary bind
function sayHi(){
  console.log(`Hi, ${this.name}`)
}
const person = {name: 'Abebe'}
sayHi.apply(person)//Abebe
sayHi.call(person)//Abebe

//bind, permanent bind, makes a clone of the method with permanent switch on context
const person = {
  name: 'Sura',
  sayHi(){console.log(`${this.name}`)}
}
const man = {name: 'Abebe'}
const newCopy = person.sayHi.bind(man)
newCopy()//abebe

//arrow function, enclosing execution centext
// a parent having its own context, and use that context
let count = 20
const counter = {
	count: 10,
  increment(){
  	setInterval(() => console.log(`${++this.count}`))
  }
}
counter.increment()//10, 11