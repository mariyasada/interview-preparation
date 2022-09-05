// what is promise?

//promise is what we do in real life, just take an example like tom will get trophy but on one condition,
//if tom wins the game without cheating,so it is promised that tom will get trophy but on some condition.
// let's move to promises in javascript
// I am getting data from server but I dont know when server will respond, how long server will take time to complete the oparation, as server has many things to do but when I get the data I will give it to you thats what a  promise is.

//promise is object that encapsulates the result of asynchronous operation.
//it has 3 state pending,fulfilled and rejected.
//1.pending // shows pending till not getting data
//2. fulfilled // got the resultant data
//3. rejected // failed due to some error


// asynchronous:  do not wait for the resposnse from server. asynchronous code runs parallel.
//the operation can occur while another one is still being processed.

//synchronous: code runs in sequence.each operation must waits for the previous one to complete before execution

//signle threaded ,synchronous language. then why asynchronous javascript term popular?  the delvelopers manipulates javscript to behave asynchronously by using three techniques, callback,promises and async/await


const Promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1);
    },1000)
})
Promise1.then(data=>console.log(data)); //  after  1second we got answer 1 // the status of promise is fulfilled

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(2,"hello");
    },1000)
})
promise2.then(data=>console.log(data)); // gives error// status rejected


// initial state of promise is pending, next state is based on a condition whether it's fulfilled or rejected

//Can we use await only with promises?

//No, we can use await with promise as well as any object that implements a then function.

const myFunction={
    then:function(print){
        setTimeout(() => 
            print(2)
        , 1000);

    }
}
const value=await myFunction;
console.log(await myFunction);
console.log(value); // 2 , object that implements only then function, if you change the name getPrint instead of then or anything it will give undefined as result.

// guess the output
const promise = new Promise((resolve, reject) => {
  reject(Error('Some error occurred'));
})
promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message));

//output

// some error occured
// some error occured

// what is sleep function
//With the help of Sleep() we can make a function to pause execution for a fixed amount of time.javascript doesn't have these kinds of sleep functions. But we should thank promises and async/await function in ES 2018. Because these features have helped us to use sleep() as easy as possible


//How can I write a sleep function using a promise?

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
   async function printName() {
     console.log('Hello');
      for (let i = 1; i <4 ; i++) {        
         await sleep(3000);
         console.log( i +" "+"Welcome to tutorix" + " " + "</br>");
      }
   }
  printName()


  // guess the output

  const promise3 = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log(error));

  //output
  //Some error occurred
//undefined

//why undefined after catch block?
//The catch function implicitly returns a promise, which can obviously be chained with a then. Since nothing is returned from the catch block, when error is logged in the then block it displays undefined.

//guess the output
const promise4 = new Promise(res => res(2));
promise4.then(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });

    // 2,4,undefined,8
    //The finally block doesn’t receive any value, and anything returned from finally is not considered in the then block so the output from the last then is used.

    //making asynchronous function
function job(callback1, callback2) {
    setTimeout(()=>{
       callback1();
    },2000)

 let counter=0;
 const timer=setInterval(()=>{
        counter++;
        callback2();
        if(counter>=3){
            clearInterval(timer)
        }
},1000)
}
// promise example
function job(data) {
    return new Promise((resolve,reject)=>{
        if(isNaN(data))
        {
          reject("error")   
        }
       else if(data %2 !== 0)
        {
            setTimeout(()=>{
                 resolve("odd")
            },1000)
        }
        else if(data %2 ===0)
        {
            setTimeout(()=>{
                reject("even")
           },2000)
        } 
       
    });
}

//guess the output
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise5 = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});

//output
//Error 1
//success 4