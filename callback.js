// callback examples

setTimeout(() => {
    console.log("timer")
}, (1000));
// using callback we can achieve asynchronicity

function x(y)
{
    console.log("x called");
    y();
}
x(function y(){ // function y is a callback function so we give a callback function to x ,now it is upto x where to call y()
    console.log("y called");
})
//Asynchronous code runs in parallel. This means that an operation can occur while another one is still being processed.
// we can see that here settimeout function also running somewhere and  is also executing

// how we can achive asynchronous operation using eventlistener

document.querySelector(".clickMe").addEventListener("click",()=>{
    console.log("button clicked")
})
// so we attach a event listener to button , when the click event fires the callback should execute, so this callback are stored in somewhere but when button clicks it pushes to call stack.

//import question for interview make a clouser using addeventlistener
// example, we attach a listener to increment counter but data privacy is not maintained here we can mainteianed data privacy using closure
let counter=0
document.querySelector(".clickMe").addEventListener("click",()=>{
    console.log("button clicked",++counter)
})

function attachListner()
{
    let counter=0
document.querySelector(".clickMe").addEventListener("click",function xyz(){
    console.log("button clicked",++counter)
})
}
attachListner();
// garbage collections && remove event listener
// why we need to remove eventlistener
//because event listener are heavy because it's takes lots of memory ,when we attach eventlistner it forms a clouser and we never know when user click the button and we need that counter variable so we can't garbage collected it. so remove event listner which are not used in code so the variable are garbage collected of that event listner.
