// hoisting means we can access the variable and functions before initializing it or without giving any value to it.
//hoisted means assigning memory to variables
// console.log(z); //undefined
// printName(); //hello mariya
// console.log(getName) //undefined

//  we can access variable and functions without any error because of hoisting 

//why we get undefined because as we know the when javascript engine runs the program the global execution context is created and in memory phase it allocates a memory to variable so it allocates memory to z and getName1 with special value undefined and in function (the whole code is avilable)
//when we execute first line the control searches in memory for variable that time the value of z and getname is undefined that's why the output is undefined. 

var z=8;
function printName(){
    console.log("hello mariya");
}

var getName1=function(){
    console.log("hello javascript");
}

var getName=()=>{
    console.log("hi");
}
console.log(z); //8
printName(); //hello mariya
console.log(getName)// ()=>{ console.log("hi")}
console.log(getName());

//function invocation in call stack

var x=1; // first x=undefined=>>> after executing one line x=1;
a();   // control here at a function 
b();
console.log(x);

function a(){ // this Execution context created and pushed to call stack, x is undefined at first then x=10;
    var x=10;
    console.log(x);
} // after executing this fn the EC deleted and poped out to call stack

function b(){  // now b's EC created and pushed to call stack
    var x=100;
    console.log(x);
} // after deleted EC the control goes to line 34 and print x, there is no more code to execute , Global execution context is deleted.


// the shortest program of javascript is blank file when we run the empty file the global execution context is craeted and along with GEC the global object (window is also craeted and this keyword also craeted) in global space this keyword points to the window object

// the code which is not inside any function is in global space

var x=10;
function a(){
    var a=3;
}
// so when GEC created ,window object craeted in this window object the x and a are stored
console.log(x)//10
console.log(window.x) //10
console.log(this.x)//10
console.log(a)// error: a is not defined;

//  UNDEFINED AND NOT DEFINED
//undefined IS NOT EMPTY , UNDEFINED MEANS VARIABLE IS IN MEMORY BUT STILLNOT ASSIGNNG ANY VALUE
// NOT DEFINED : THE VARIABLE IS NOT IN GLOBAL EXECUTION CONTEXT MEMORY
//UNDEFINED IS PLACEHOLDER FOR VARIBLE TILL THE USER HAS ASSIGN SOME VALUE 
