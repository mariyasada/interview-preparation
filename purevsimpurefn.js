//pure function is a function without sideeffects means doen't modified nay original data.

// impure function that contains one or more side effects.

//impure function example
const fruits=["mango","banana","orange"];
function updateFruits(fruitname)
{
    fruits.push(fruitname);
    return fruits;
}

console.log(updateFruits("kiwi")); 
// output is  ['mango', 'banana', 'orange', 'kiwi'] means the original array modifies which is called side effects

// taking same example for pure function

function pureFunction(name)
{
    let updatedfruits=[...fruits,name];
     return updatedfruits;
}

console.log(pureFunction("papaya")); // ['mango', 'banana', 'orange', 'kiwi', 'papaya']
console.log(fruits); // ['mango', 'banana', 'orange', 'kiwi']

// it doesn't have any sideeffect so this is pure function , and original array doesn't modified

// advantage of pure function 
//independency=>>> doesn't affect ant external state which we saw in above example
//Readability=>>>> easy to read and can debug easily.

// we can say that this is pure function based on below information

//1. you can clone/use the external state into pure function we did it above
//2. can not mutate the data
//3. always return something or some
//4. for a same input, will always give the same output

