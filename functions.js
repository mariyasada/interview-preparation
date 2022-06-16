//function statement also know as function declaration
//creating a function with function keyword and functionName is known as function statement
function a()
{
    console.log("a called");
}
// function expression
 //storing a function as a value into some variable is known as function expression 
 var b=function()
 {
    console.log("b called");
 }
 a();
 b();
 //what is the diffrence between function statement and function expression
 // the diffrence is hoisting, we can access the function a before it's declaration without any error, but if we call b() before it's declaration it's gives an error: b is not a function because b is undefined and we invoke a undefined.

 //anonymous function
 // the function without it's name is called anonymous function

//  function ()
//  {
//     console.log("hi i am anonymous")// if we run this code it's gives error that identifier expected because due to ecmascript specification we can't declare a function without it's name
//  }
//we can use anonymous function to craete function expression like about var b expression 

//named function expression
//storing a function with it's name into variable is known as named function variable

var c=function xyz(){
    console.log("hi i am xyz");
}
// but we can't call like xyz() Error: xyz is not defined
 //this because this is not in global scope. if you want to access then you can call like above
c();
//or do like this

var d=function xyz()
{
    console.log(xyz);
}
d();

// PARAMETERS VS ARGUMENTS

//parameters: when we create a function and we puts identifier, labels into parentheses this is called parameters.

//arguments: when we passing a value while invoking a function it is called as arguments
function hello(param1,param2) // parameters
{
    console.log(param1,param2)
}
hello(2,4)// it is arguments

// first class functions is also known as first class citizens
//we can pass function inside a function as a arguments, we can return a function from function,

//The ability to used a function as a values and can be passed this in a arguments and return outof another function, assigning to a variable  is a first class functions.
// for example

var e= function(param1){
    console.log(param1)
}

 e(function(){console.log("hello anynoums")}); //ƒ (){console.log("hello anynoums")}
// he we used a function as a argument or values
function xyz()
{
    console.log("hello");
}
e(xyz()); // hello
//ƒ xyz()
// {
//     console.log("hello");
// }

var f=function ()
{
    return function yz()
    {
        console.log("h1")
    }
}
f();
