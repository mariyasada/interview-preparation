// this file contains all guess the output based questions

function showData() {
  console.log("variable name is", name);
  console.log("variable value is", a);
  var name = "mariya";
  let a = 7;
}
//op variable name is undefined
// refernce error we can't access a before intialization; (hoisting concept used);

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//0--5, 1--5,2--5,3--5,4--5 // 5 times 5
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//op 0,1,2,3,4

console.log(!+[] + [] + ![]);
// empty array means truthy values and empty string means falsy value sow first empty array converts into string
// ! + "" + ""+ !true
// !"" + ""+false
//true +""+false ==>truefalse

console.log([] == ![]); // ""==false=> false==false > true

const income = {
  skills: 108,
  monthly() {
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
};
console.log(income.monthly());
console.log(income.yearly());

// this  keyword represents context of where it called. so first method is a normal function so it have window object which have income object context so it gives result 11567 something but yearly methhod is declared using arrow fn so arrow function doesn't have its own context it only have its parent's context and income obj has window as a parent so it gives NAN.

console.log(+true); // unary + operator always try to convert value into number so true is 1 and ouput is also 1
console.log(!"javascript"); // negation operator always try to convert value into boolean so javascript is some value !true===> false
console.log(+""); //0
console.log(+null); //0
console.log(+undefined); // NaN
console.log(+"abc"); //NaN

// How you can access the object's key
const mariya = {
  name: { firstname: "mariya" },
};

console.log(mariya["name"]["firstname"]);
console.log(mariya.name.firstname);
console.log(mariya["name"].firstname);

// class based ques
class Animal {
  static colorChange(newcolor) {
    this.newcolor = newcolor;
    return this.newcolor;
  }
  constructor({ newcolor = "black" } = {}) {
    this.newcolor = newcolor;
  }
}
const tommy = new Animal({ newcolor: "orange" });
console.log(tommy.colorChange("blue"));

// here we got an error like tommy is not a function because we can not access static method of class. if we want to access any method of class then we have to call like this Animal.colorChange("blue")

//how you can convert ["mariya","sada"]===> mariya
//                                         sada
var names = ["mariya", "sada"];
console.log(names.join("\n"));

// function behaves like an object in JS so we can call like this and it works without any error.
function showModal() {
  console.log(showModal.timeout);
}
showModal(); //undefined
showModal.timeout = 200;
showModal.timeout = 100;
showModal(); //100

//
function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Human("mariya", "sada"); // we create instance using constructor
Human.getFullName = function () {
  // we attach a function means they added getfullname key to human but it doesn't work
  return `${this.firstName} ${this.lastName}`;
};
console.log(member.getFullName()); //type error  because this method doesn't accessible in this member object
// if we want to make a code workable then we have to add Human.prototype.getfullName instead of Human.getFullName

//
function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const Mariya = new Human("mariya", "sada"); //it prints object
const sada = Human("sada", "mariya"); // without new keyword the human function doesn't return anything that's why it prints undefined

//
function getSummary(one, two, three) {
  console.log(one); //["", "age is", ""]
  console.log(two); // vasuki
  console.log(three); // 878
}
const fName = "vasuki";
const age = 878;
getSummary`${fName} age is ${age}`;
// when we call a function like this so first parameter is an array of strings and second and third parameter are the variables which we are used in template literal

const obj = { 1: "a", 2: "b" };
const arr = new Set([1, 2, 3, 4, 5]);
console.log(obj.hasOwnProperty("1")); //true
console.log(obj.hasOwnProperty(1)); // when it compares it converted number into string so output is true
//objects keys are always a string

console.log(arr.has(1)); //true
console.log(arr.has("1")); //false

for (let i = 1; i < 5; i++) {
  if (i === 3) continue; // continue keyword skips the iteration when condition is true
  console.log(i); //1,2,4,5
}

const a = {};
const b = { key: "c" };
const c = { key: "ba" };
a[b] = 222;
a[c] = 999;

console.log(a[b]); //999 because when we add a key to any object it sets as a string so a[b] the b object sets in a object as [object object] because it converts object into string so [object object]=222 now we add a a[c] means c object into a which also converts into string so [object object] but we already have [object object ] key so 222 replaces by 999 that's why output is 999

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x); // inner x hai that's why 1
  }
  console.log(x); //undefined
  console.log(y); // 2 because we set y
})();

console.log(parseInt("10+f2")); //10// parseint try to convert string into integer so first it check whether string includes any number at the starting of the string if yes then it returns that  as a number
console.log(parseInt("7f")); //7
console.log(parseInt("fmariya2")); //NaN

function getInfo(member, year) {
  member.name = "frontend";
  year = "1947";
}
const person = { name: "dev" };
const birthYear = 1947;
getInfo(person, birthYear);
console.log(person, birthYear); //{name:"fronend"} ,1947 because we can't change primitive value

function Hero() {
  this.make = "bhagat singh";
  return { make: "Vivekanand" };
}
const myHero = new Hero();
console.log(myHero.make); // vivekanand because the first priority is for when we return something explicitly so here we explicitly return vivekanand wala object

const obj1 = {};
Object.defineProperty(obj1, "a", { value: "char", enumerable: true }); // we can add keys and value into object using defineproperty
console.log(obj1.a); // char
console.log(Object.keys(obj1)); //[] it is empty because when we add key,value using defineproperty for a security purpose the key was hidden if we want that the key is also printed then we have to addd one property {enumrable:true}

//freeze makes an object completely immutable, while Object. seal allows existing properties to be modified, but prevents the addition and deletion of new properties.

const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1); //33

object1.property2 = 34; //can't add new properties
delete object1.property1; //can't delete existing properties
console.log(object1);

const box = { x: 10, y: 20 };
Object.freeze(box);
const shape = box;
shape.x = 100;
shape.z = 20;
console.log(shape); // {x:10,y:20} we can't perform updation,insertion,deletion when we freeze the object

//push method returns the length of the array
//delete operator is used for deleting keys of object, if it successfully deletes then it returns true otherwise false

const { fName: fDev } = { fname: "mrx" };
console.log(fName); // fname is not defined because while destructuring we renamed fName to fDev so when we console fDev it gives the result mrx

// function getList(list,...args,moreitem){
//   return [...list,...args,...moreitem];

// }
// getList(["orange","kiwi"],"pineapple","mango"); //gives error because args parameter must be a last parameter in the function => rest parameter must be last formal parameter

const fruits = ["mango", "rice", "kiwi"];
fruits.slice(0, 1); // delete mango but fruits array remains the same ,doesn't modified array
fruits.splice(0, 1); //delete the first item mango and modifies the array so ["rice" ,"kiwi"] ==>fruits
fruits.unshift("banana"); // unshift add the items from front and shift deletes the item from front ["banana","rice" ,"kiwi"] , push and pop add and remove items from rear

//using proxy method you can detect the change of the object

const handler = {
  set: (target, property, value) =>
    console.log("added a new propery", target, property, value),
  get: (target, property) => console.log("access"),
};
const person2 = new Proxy({}, handler);
person2.name = "bhaad mein jao";
console.log(person2.name); // undefined

//in the console you can see the added new propery,{},"name","bhaad mein jao", access and undefined
//sparsed array- means it contains empty items
//primitive data types are immutable means we can't chnage strings,numbers but we can change objects

let str = new String("js");
console.log(str === "js"); //false
console.log(str == "js"); // (object==="js")// object convert into string so "js"=="js" //true

//primitive-string,number,symbol,null,undefined,boolean +==>fixed memory (4kb)and saved in call stack,priitive works as call by value, and it is immutable
//non-primitive:object,arrays,functions  ===>dynamic memory and saved in heap memory , non-primitive works by call by reference so reference is same if we assign to another variable and it is mutable.

//how you can make this function works
function Person(name) {
  // this.name=name;
  if (new.target) {
  } else {
    throw new Error("new keyword missing ");
  }
}
Person();
console.log("works");

// so here we want to show an error if the constructor function calls without a new keyword. there are two ways
//1. "use strict" mode at the starting of script
//2. comment out this.name line and write the if check if(new.target){ // do if the constructor fn called with new keyword} else throw new error

// how you can satisfies all condition
// const obj3 = {};
const obj3 = {
  flag: 1,
  get value() {
    return this.flag++;
  },
};
if (obj3.value === 1 && obj3.value === 2 && obj3.value === 3) {
  console.log("hey whatsapp");
}
// we can use getter and setter function, get method used to access the value of key(sare objects mein hota hai). getter function behaves like a key we don't need to call every time

let x = {
  flag: 1,
  toString: function () {
    return this.flag++;
  },
};
if (x == 1 && x == 2 && x == 3) console.log("my birthday");

console.log(888888888888888888); //888888888888888800 because if the number is greater than this max_safe_integer 9007199254740991 then JS automatically adds 0 at last after 16 digits

//static type- we have to use data type when we decclared variable like boolean number. c and java
//dynamic type- we dont have to use data type at compile time so js is dynamic type language.

//input:"a.b.c.d.e"
//output:{a:{b:{c:{d:e}}}

const str3 = "a.b.c.d.e";
console.log(
  str3.split(".").reduceRight((acc, curr) => {
    return { [curr]: acc };
  }, {})
);

//create a function add without using function and arrow function
const a = 10;
const b1 = 20;

const add = new Function("a", "b1", "console.log(a+b1)");
add(a, b1);

const nameObj = { slogan: "hello hi bye bye" };
const newname = Object.create(nameObj);
delete newname.slogan;
console.log(newname.slogan); // you can see hello hi bye bye so as we know delete method is used to delete property of object but here when we care creating object using create method the property  slogan is atatched to the prototype chain of newname object becuase it inherites from nameobj that's why we can't delete it //object.prototype=>constructor=>create=>{slogan:} aisa kuch hoga in behind the scene

const getData = () => {
  console.log(this);
};
const obj34 = { user: 1 };
getData.call(obj34);
// here we can see the window object because the binding of context happend at compile time so we can't change the binding context at runtime
//switch statement use === for comparison
//es6 features template literal,symbol,numeric seperator,spread,rest operator(underscore use as a seperator for large numbers 10_00_000_00)

//
const x1 = { a: 1, b: [4, 9], c: { d: "ref" } };
const y = { ...x1 };
y.b[1] = 10;
x1.c.d = -false;

console.log(typeof x1.c.d, x1.b); // number [4,10]; -false=-0 which is number and here we are trying to change the property of b which contains array so it can change
//suppose if we are changing y.b=10 then it can't be change
