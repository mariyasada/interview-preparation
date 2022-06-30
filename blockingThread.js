console.log("start");
setTimeout(()=>{
 console.log("callback");
},5000);
console.log("end");

//blocking main thread for sometime

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate +20000)
{
    endDate=new Date().getTime();
}
console.log("while running");
//output is 
// start
//  end
//  while running
//  callback

//because the callback function is registerd with timer and after that GEC running the while loop code which takes more than 10 seconds but timer is expired long back, so callback goes to callback queue and GEC still executing these while loop code, event loop constantlychecking to call stack  whenever call stack gets empty after that the callback pushes to callstack, this is the concurrency model.