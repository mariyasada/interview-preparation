document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log("grandparent click");
},true)
document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("parent click");
},false)
document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("child click");
     e.stopPropagation();
},false)
// here when we adding eventlistner it takes three parameter , event,callback,usecapture. if usecapture is true then event capturing happents, by default it is false so event bubbling happened

//event bubbling means it bubbles up when we fire an event.
//suppose when we click chaild div then in bubbling case first child click print, after that parent click,then grandparent print

//in event capturing it is opposite to bubbling, when we click child it prints in thsese order
// grandparent click
//parent click
//child click

//when we click parent div ===> bubbling=>>> parent click,grandparent click
//---->>>> capturing =>grandparent click,parent click

//if we want to do event capturing for event propogation you have make sure that use capture the third parameter of eventlistner is true,if it is true then event capturing happen

//what if there is mixing of true and false like the below code
// document.querySelector("#grandParent").addEventListener("click",()=>{
//     console.log("grandparent click");
// },true) // capturing

// document.querySelector("#parent").addEventListener("click",()=>{
//     console.log("parent click");
// },false) //bubbling

// document.querySelector("#child").addEventListener("click",()=>{
//     console.log("child click"); // capturing
// },true)

//in above code, in first event the capturing is true,  second is a bubbling and third is capturing

// so when dom has these type of event, then first capturing happens after that bubbling take pa\lace

//output is grandparent click,child click, parent click when we click child div
// when we click parent div, grandparent click,parent click


// //document.querySelector("#grandParent").addEventListener("click",()=>{
//     console.log("grandparent click");
// },false)
// document.querySelector("#parent").addEventListener("click",()=>{
//     console.log("parent click");
// },true)
// document.querySelector("#child").addEventListener("click",()=>{
//     console.log("child click");
// },true)

// in this code when we click child div output is parent ,child then grandparent
// parent div click=>parent click,grandparent click

// in one the event if usecapture is true then event capturing is firts take place then eventbubbling
//but it check where you click suppose clickig child then firt it captures and then bubbles
//grandparent,child and parent

// how to stop propogation, there is method stoppropogation, if we will add to on second ebvent then it stops event capturing and bubbling at that time 
// in top of the output is grandparent click,parent click