function Counter(){
    var counter=0;
   this.increment=function(){
        counter++;
        console.log(counter);
    };
    this.decrement=function(){ // if we write without this it gives error counter.increment is not a function
        counter--;
        console.log(counter);
    };
}

var counter1=new Counter();
console.log(counter1);
counter1.increment();

function x(){
    var a=10, z=20;
    function b(){
        console.log(a);
    }
    b();
}
x();

//data privacy using clouser
var counter=0; // this is global so anybody can use it
function increment()
{
    count++;
}
function counter(){
    var counter=0;
    return function increment()
    {
        counter++;
        console.log(counter)
    }
}
var counter1=counter();
counter1();
var counter2=counter(); // it is create a new clouser like we call counter2() it also prints 1