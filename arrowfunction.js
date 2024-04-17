// diffrence between arrow function and normal function, two ways to create function (normal and arrow function)

//function definion and function expression are normal functions
function Display() {
  console.log("hi");
}
var printfunction = function () {
  console.log("hi");
};
const print = () => {
  console.log("arrow function");
};
// where not to used arrow function
// 1. with this keyword
// as we know that in normal function this points to global object and in object method this points to the object but if we use this with arrow function it's refers to global object but when we add property with this it is undefined

const myobject = {
  name: "mariya",
  printname: () => {
    console.log(this.name); //undefined
    console.log(this, "let's see"); //global object
  },
};
myobject.printname();

//2. constructor
//  if constructor defined using normal function then we can create an new instance of object using new operator

//but  if the function defined using arrow function and try to create a new instance of object using new operator it gives type error that car is not a contsructor function
function MyCar(name, model) {
  this.name = name;
  this.model = model;
}
const alto = new MyCar("suzuki", 2010);
console.log(alto);

const Car = (color) => {
  this.color = color;
};
const redCar = new Car("red"); //TypeError: Car is not a constructor

//3. arguments object

// arguments is a special array like object containing the list of arguments in key-value pair formats

function myFunction() {
  console.log(arguments);
}
myFunction("a", "b"); //["a","b"]0:"a",1:"b"

const myArrowfunction = () => {
  console.log(arguments);
};
myArrowfunction("mariya", "sada"); // argiments is not defined

// you can access all the arguments using rest parameter
const myfunctionwithargs = (...args) => {
  console.log(args);
};
myfunctionwithargs("heloo", "anupama"); //['heloo', 'anupama']

//4.implicit return

// in normal function if we have to return something we have to write return statement, but in arrow function contains one expression and you omit the the curly braces then the expression implicitly return/ automatically returns

function returnValue() {
  return 42; //42
}
function returnsome() {
  42; // undefined
}

const myfunc = (num) => num + 1; // directly return the value +1;
myfunc(32); // answer 33 return

//5.methods
//with the class instance, if you define a method using normal function and if you try to access variabke using this then it gives undefined,

class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName() {
    console.log(this.heroName);
  }
}
const batman = new Hero("Batman");

//we definde a method logname
setTimeout(batman.logName, 1000); //undefined  whre this is global object if you want to access like this then you have to use bind method
setTimeout(batman.logName.bind(batman), 1000);
// after 1 second logs "Batman"

// arrow function case
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  };
}
const batman1 = new Hero("Batman");
setTimeout(batman1.logName, 1000); //batman
// this inside the method refers to class instance
