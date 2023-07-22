// there are two ways to copy object or arrays to another object and array

let x="mariya";
let y="sada";
y=x;
console.log(y,x); // variable's data is copied so output is mariya mariya
// because x have stored value at some memry location and y also stored at memory location now we changed the location of y which points x's memory location and x has value mariya so that's why output is mariya mariya

//now let's move with object and array

let obj={
    name:"mariya"
}
let user=obj;

// when a refernce variable is copied into a  new reference variable using assignment operator, the shallow copy of the refernced object is craeted.
user.name="sada";
console.warn(user,"user");
console.warn(obj ,"object");

// here user copies the refernce of obj not obj's data, so when we change the value of user' data it points the same memory location which has obj' memory location
// so when we changes the data the original also change because of same memory reference
// both have a output as {name:"sada"};

// to solve the problem we can use object.assign method

let userMariya=Object.assign({},obj); // object.assign(target,source) =>> returns targeted object =>copies value refernce of obj
userMariya.name="sada mariya M";

console.warn(userMariya); //{name:"sada mariya m"}
console.warn(obj);//{name:"sada"}

let userSada={...obj};
userSada.name="fida";
console.warn(userSada);

// take an example of array
let array=["mango","apple","papaya"];
let fruit=array;
fruit[0]="orange";
console.log(array,fruit); // because of same memory location the original also modified.

// we can solve this issue using slice method,
let fruit=array.slice(0); //copied the array
fruit[0] = "orange" // now changing copied array

console.log(fruit, array)

// can do this by spreading operator
let fruit=[...array];
fruit[0] = "orange" // now changing copied array
console.log(fruit, array)

//concat method
let fruit=array.concat([]); // copied the array
fruit[0]="orange";
console.log(fruit, array)

//array.from
const copiedFruit = Array.from(array)   // creates an actual copy of array 
copiedFruit[0] = "orange"
console.log(array, copiedFruit)

// the shallow copy means the old refernce variable and new copied reference varible point to same object in memory. shallow copy only work on main object, not work at nested levels like object has another object of address.

//deep copy
//deep copy makes the copy of all the members of the old object,allocates the new memory location for new object and then assign that copied members to new object. both the objects are independent of each other, so if we change one, the other is not affected.

// let's take an example

let mariya={name:"mariye",address:{city:"modasa",state:"gujarat"},getFullName:function(){return "hi"}};
let sada={...mariya};
sada.address.city="mumbai";
console.log(sada);
console.log(mariya); // for both objects output is same address: {city: 'mumbai', state: 'gujarat'}
//name: "mariye"
//shallow copy doesn't work at nested level so we use deep copy for that

// for the solution  we can use JSON.stringify method which converts into json string and json .parse converted into object 
let sada1=JSON.parse(JSON.stringify(mariya));
sada1.address.city="nagpur";
console.log(sada1) //city chnaged to nagpur
console.log(mariya); // city is mumbai because of the above code it's change from modasa to mumbai

// but there is another problem , if the object has date and some kind of method like get fullname..then while performing a deep copy it neglect the function, so when we print sada ,the function not included in tit
// so for this problem we can use external libraries like lodash,using the lodash' clonedeep function we can perform a deep copy .
// this is a syntax
//let deepcopy=lodash.clonedeep(mariya);






