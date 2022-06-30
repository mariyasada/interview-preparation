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