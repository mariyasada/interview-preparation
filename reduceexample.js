const users=[{
    firstName:"mariya",lastName:"sada",age:27
},{
    firstName:"riya",lastName:"soni",age:25
},{
    firstName:"maya",lastName:"das",age:45
},{
    firstName:"mariya",lastName:"sahani",age:27
}];

const output=users.reduce((acc,current)=>{
    if(acc[current.age])
    {
        acc[current.age]=++acc[current.age];
    }
    else {
        acc[current.age]=1;
    }
    return acc;
},{})
console.log(output);
// find the first name of candidate whose age is 27

const output2=(acc,curr)=>curr.age===27?[...acc,curr.firstName]:acc;
console.log(users.reduce(output2,[]));


//write function for sum(1)(2)(3)(4)...();
// after looking this question we can use currying in this example

let sum=a=>b=> b?sum(a+b):a;
console.log(sum(1)(2)(3)());

let sum1= function(a){
    return function(b){
        if(b)
        {
            return sum1(a+b); //calling sum function here // here it makes a closure that takes a value of a and do sum of two values 
        }
        return a;
    }
}
console.log(sum1(1)(2)(3)());