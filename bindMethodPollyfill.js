// let's see how inbuilt bind method works
const person = {
    name: "mariya",
    lastname: "sada",
}
let getFullName = function (hometown, state,country) {
    return (this.name + " " + this.lastname + " from" +" " + hometown + "," + state +" "+ country) // this points to object
}

const printName=getFullName.bind(person,"modasa","Gujarat");
printName("india");


//let's move to pollyfill what we need
//1. it'f from function prototype so all the functions and object can use this method like getfullname uses bind
//2. myfind first return a function which is then bind a object so, in argument there is person object, but propably there are more than one argument  so using spread operator for that

//3. we need getfullName method into function , we can use this variable for that. this points to getfullname method   
//4.we have pass the object into call method so we extarct this from args
//5. but what if, if we have more than two arguments like above hometown,country and state
//6. we applied slice method on args so we get array of parameters,instead of call, we have array so we use apply method for that

//7.if someone passes a argument from myprintName("india") .handle this corner case also
Function.prototype.myBind=function(...args)
{
    let obj=this;
    let parameters=args.slice(1) 
    return function (...args2)  {
      let output=obj.apply(args[0],[...parameters,...args2])
      return output;
    }
    
}


let myPrintName=getFullName.myBind(person,"dehradun","uttarakhand");
myPrintName("India");


// call pollyfill
const myObj1={
    name:"mariya",
    getName:function(greet,greet1)
    {
        console.log(this.name + " " +greet +" "+greet1) 
    }
}

const myobj2={
    name:"sada"
}

myObj1.getName.call(myobj2,"hello"); //sada hello
const callfun=myObj1.getName.bind(myobj2,"hhdhsahdhs");
callfun();

Function.prototype.myCall=function(obj,...args){
    console.log(this);
    obj.getName=this; //getname function , here we are assigning the method to myobj object using . notation after that we are calling that
    obj.getName(...args);  // calling with arguments
}
myObj1.getName.myCall(myobj2,"hello","ji");


//apply method
Function.prototype.myApply=function(obj,args){
    obj.getName=this; //getname function
    obj.getName(...args);  // calling with arguments
}

myObj1.getName.myApply(myobj2,["hello","morning"]);

// mybind also

Function.prototype.myBind1=function(obj,...args)
{
    console.log(this); // object's getname method;
    obj.getName=this;
    return function(...arg1) {
       let output= obj.getName(...args,...arg1);
       return output;
    }
}
const bindcall=myObj1.getName.myBind1(myobj2,"goodnooon");
bindcall("morning");