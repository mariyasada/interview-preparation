// can you show the usage of map,reduce,filter and find with an example

//map: map returns a new array after executing the calling function on every element of array
//let's take an example for this array of numbers return an array with all the numbers increamented by two
var inputarr=[1,2,3,4,7];
const addTWo=(curr)=>curr+2;
console.log(inputarr.map(addTWo)); //[3,4,5,5,9];

// reduce
// reduce method returns a single value after iterating a calling function on every element of arr, it takes 3 parameter,accumulator,currentvalue,currentindex and initial vaue;

//let's take an example of taking this array and find the sum of all the elements. we can do this using reduce method
var findsum=(acc,curr)=>acc+curr;
console.log(inputarr.reduce(findsum)); //17

//filter
//filter returns a new arr with elements which pass the test/conditions provided by function let's try to implement function which takes this array and filters a number which is even

var findEvenNumber=arr=> arr %2===0;
console.log(inputarr.filter(findEvenNumber));//[2,4]

//find
// find  returns the value of first element which passes the test let's consider the above example and try to find first even number

var findEvenNumberUsingFind=arr=>arr%2===0;
console.log(inputarr.find(findEvenNumberUsingFind));//2


//what is the difference between foreach and map
//map returns anew array whereas foreach doesn't return a new array
//method chaining is possible in map,method chaining is not possible in foreach

inputarr.forEach((element,index) => {
    console.log(element,`element ${index}`)
});

// for each method is not executed for empty elements and returns undefined not an array


//how to perform method chaining

//when the output of first method is a input for second method so we can do that using method chaining
//// find the first name of candidate whose age is 27
const users=[{
    firstName:"mariya",lastName:"sada",age:27
},{
    firstName:"riya",lastName:"soni",age:25
},{
    firstName:"maya",lastName:"das",age:45
},{
    firstName:"mariya",lastName:"sahani",age:27
}];

var findOutput=users.filter(arr=>arr.age===27).map(arr=>arr.firstName);
console.log(findOutput); // this is called method chaining


//what is difference between Map and set?
// Map is a collection of keyed data items,just like an object but the main difference is that map allows key of any type.
new Map()// creates a Map
map.set(key,value)

var map=new Map();
map.set(1,"mariya");
map.set("1","sada");
map(true,"sdaaaa"); // we can use any type as a key
map.size// return a length ,current element count
map.get(key)// getting data of that key
map.delete(key)//delete data of that key
map.has(key)//returns true if key exists otherwise false

//set is a special type of collection-set of values without keys where each value may occur only once

let set=new Set();
let john={name:"john"};
let jowel={name:"jowel"};
let jassica={name:"jassica"}

set.add(john);
set.add(jowel);
set.add(jassica);
set.add(john); // again we are trying to add john but it does not add to set
console.log(set.size);

for(let user of set)
{
    console.log(user.name); //john jowel jassica
}

//object.keys,values an dentries

//object.keys returns an array of keys

let user={name:"john",age:30}
for(let value of Object.keys(user))
{
    console.log(value,"keys");
}

for(let value of  Object.values(user))
{
    console.log(value,"values");
}
for(let value of Object.entries(user))
{
    console.log(value,"entries");
}

//for in and for of loop

// for of loop is used for any iterable object(array,set,strings,etc);
// can't be used to iterate  over a object

//then you say tha we done this above so we apply the for of loop on the array of keys //op of object.keys ['name', 'age']

// for(let value of user)
// {
//     console.log(value,"keys"); // user is not iterable
// }

// for in loop is used to iterate through the keys of the object.
// you can use for in loop for arrays and strings but you should avoid using for in