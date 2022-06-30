//function object has a three methods call,bind and apply
//we can use one objects' method into another object usig call,bind and apply method.
// const person={
//     name:"mariya",
//     lastname:"sada",
//     getFullName:function(){
//         return (this.name +" "+ this.lastname) // this points t person object
//     }
// }
const person = {
    name: "mariya",
    lastname: "sada",
}
let getFullName = function (hometown, state) {
    return (this.name + " " + this.lastname + " from" + hometown + "," + state) // this points to object
}
//The call() method calls a function with a given this value and arguments provided individually.

// we can invoke method like this

// person.getFullName("modasa"); // mariya sada

// after changing the above code invocation also chnaged

getFullName.call(person, "modasa");

// but what if we want to access this getfullname method for another object
// function borrowing is done by call method meand we can do this by using call method

const person2 = { name: "haya", lastname: "sultan" }

// person.getFullName.call(person2,"mumbai");// haya sultan

getFullName.call(person2, "mumbai", "maharastra");

// but for a good practice you have to write a method outside the object like above you can see two different code . what if we add one more parameter in this adding hometown

// apply method 

// apply method ia same as call method but instead of writing arguments like mumbai and maharsatra seperating by coomma it takes an array of this
getFullName.apply(person2, ["mumbai", "maharastra"]); // it gave a same output


// bind method
// we can't directly call a method like a call , bind method binds the object with function and create a new copy then we can invoke a new copy function like this
//  this keyword bound to the object that you provide

const printFullName = getFullName.bind(person, "delhi", "dehradun");
//pssing person object for refrence to this variable and this pointing to getfullName method
console.log(printFullName);
//output of console printfullname is the getfullname function
// //ƒ (hometown,state){
//         return (this.name +" "+ this.lastname +" from"  +hometown+"," +state) 
//     }

// now we have to call printFullName
printFullName(); //mariya sada fromdelhi,dehradun
 // what if we directly call like below
 //getFullName.bind(person,"delhi","dehradun"); // it gives the copy of getfullname function
