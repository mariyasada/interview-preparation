//when we create any function,object and array javascript engine attach the prototype object to these object,array and function. because of this prototype object we can access many properties or method like length,indexof etc.

//array
const array = [1, 2, 3, 4];
//arr.__proto__ // this is array that contains all properties which is same a Array.prototype
//arr.__proto__.__proto__ is an object which is same as Object.prototype
//array.__proto__.__proto__.__proto__ is null means a Object.prototype is null

//Object

const obj = { a: 1 };
// obj.__proto__   this is an object that conatins all those properties
//obj.__proto__ is object which is same as Object.prototype
// So, obj.__proto__.__proto__ is null

//Function

function func() {
  console.log("Hello");
}

//func.__proto__  this is an object that conatins all those properties
// It is similar to Function.prototype
// func.__proto__.__proto__ is  an object which is similar to Object.prototype
// So, func.__proto__.__proto__.__proto__ is null

// So we can now say that prototype chain ends in object and its last value is null

//Prototypal Inheritance
// we change the proto of one object. We asisgn it proto to another object.
//

const object = {
  name: "mariya",
  city: "modasa",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};
//never do this in production
const object2 = {
  name: "bhakti",
};
object2.__proto__ = object;
console.log(object2.city); // modasa
console.log(object2.name); // bhakti
console.log(object2.getIntro()); // bhakti from modasa

const myobj = {
  name: "mariya",
  city: "mumbai",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};
const object3 = { name: "tushar" };
object3.__proto__ = myobj;
object3.getIntro();

const arrayy = [1, 2, 3, 4];
Array.prototype.Calling = function () {
  console.log("Hello");
};
console.log(arrayy.__proto__);
arrayy.calling();
