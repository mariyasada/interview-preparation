function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();

// when we run a program the execution context of x is created  and we return function y from that, after returning the function along with it's lexical scope the x's execution context was deleted. and in var z have function along with it's lexical scope.

// so when we invoke a function z it's find the variable in it's scope aand also with it's parent's lexiacal scope. that's why we get the output as 10

// now let's modified some example
// function n(){
//     var a=10;
//     function m(){
//         console.log(a); //100
//     }
//     a=100;
//     return m;
// }
// var o=n();
// console.log(o);
// o();

// the ouput is 100 but why?when we returnning a function y , y has the reference of a, after execuring the line a=100; the memery of a changed 10 to 100, so when we invoke a function y it's points a memory which has a value 100.

// function a(){
//     var b=100;
//     function c(){
//         var d=10;
//         function e(){
//             console.log(d,b)
//         }
//         e();
//     }
//     c();
// }
// a();

// function e still makes clouser of (c) and clouser of a with it's lexiacal envrionment

//INTERVIEW QUEATION BASED ON SETTIMEOUT AND CLOUSER

//WRITE A PROGRAM WHICH PRINTS 1 TO 5 AFTER EVERY SECONDS

// function print()
// {
//     for(var i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000) 
//     }
// }
// print();

// after every second it will print 6 not 1,2,3,4,5 why?
//so when the program runs the settimeout takes the refernce of i and set the timer again second time the callback function with timer has same refernce of i, and we know that javascript waits for none. when timer is expires the value of i becomes 6 that's why it prints 6.

// so the solution of this is use let instead of var
// function print1()
// {
//     for(let i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000) 
//     }
// }
// print1();

// when the code runs settime takes a callback function and sets a timer but because of let i is block scoped so it creates a new copy of i
//every callback function points the different reference of i

//another way of making the program works using var is makes a clouser
// function print2()
// {
//     for(var i=1;i<=5;i++){
//         function clouser(x){
//         setTimeout(()=>{
//             console.log(x)
//         },x*1000) 
//     }
//     clouser(i)
// }

// }
// print2();

//when we run the program the callback function of settime stores the refernce of it's parent lexical scope
// in first pass clouser(1)=>>> settimeout refer the x=1
//in second pass clouser(2)=>>>settimeout refer the x=2 lke wise
let m=true;
setTimeout(()=>{
     m=false;
    console.log("hello");
},1000);
m=false;

setInterval(() => {
    if(m){
        console.log("hmmm");
    }   
}, 200);
// while(m)
// {
//     console.log("hhhh");
// }

// remove duplicates from array
const arr=["Mariya","sada",1,2,3,2,4,1,"Mariya","sada",4,6,7];
console.log(arr.filter((item,index)=>arr.indexOf(item)===index));

//second method
const unique=[...new Set(arr)];

// third
console.log(arr.reduce((acc,arr)=>acc.includes(arr)?acc:[...acc,arr],[]));





