const myobj1={
    name:"mariya",
    display: function (){
        console.log(this.name);
    }
}
console.log(myobj1["name"]);
const obj1={
    name:"sadaa"
}
myobj1.display();
myobj1.display.call(obj1);

// memoized function

const expensiveFunction=(num1,num2)=>{
    for(let i=0;i<10000000;i++){}
    return num1*num2;
}

// console.time("first run");
// console.log(expensiveFunction(9888,8998)); // it takes 0.3659 ms
// console.timeEnd("first run");

// console.time("second run");
// console.log(expensiveFunction(9888,8998)); // 0.1608 ms
// console.timeEnd("second run");

// second time it takes 0.16ms, what memoize does is that memoize function stores the result in cache or in memory so when you run the function for second time with same arguments then it doesn't run the expensive function it just gave the result from cached memory.

function myMemoized(callback,context){
    let result={};
    return function(...args){ // args is what the callback function returns
     var argumentsInCache=JSON.stringify(args);
        if(!result[argumentsInCache])
        {
           console.log(context,this);   
            result[argumentsInCache]=callback.call(context || this,...args);
        }
            return result[argumentsInCache]
        
    }
}

const memoizedFunc = myMemoized(expensiveFunction);
console.time("first run");
console.log(memoizedFunc(9888,8998)); // it takes 0.3659 ms
console.timeEnd("first run");

console.time("second run");
console.log(memoizedFunc(9888,8998)); // 0.1608 ms
console.timeEnd("second run");