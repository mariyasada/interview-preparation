//lazy loading

// lazy loading is the one of the technique to decreasing the initial loading time to clients.
//only load images which come into the viewport. like thre are lots of images in ecomm site, so if we give loading=lazy to img ,then it only shows images which  comes to the viewport , if we scroll down then some other images are visible which comes to viewport

//<img src=”image.jpg” alt=”…” loading=”lazy”>
//intersection observer // which is done using useRef hook
// using libraries (React lazy load image,lozad,yall-js,lazy sizes)

// slice and splice

//slice creates a new array with selected elements and doesn't modified an original array
//syntax arr.slice(start,[end])=>>>> zero based index, doen't include the last value means returns a new array with shallow copy from start to end(end not included)

const arr1=[1,2,3,7,"🎉","😍",9];
arr1.slice(2,3); //[3]
arr1.slice() // [1,2,3,7,"🎉","😍",9];
arr1.slice(2)//[3,7,"🎉","😍",9]              // returns selected elements
arr1.slice(2,4) //[3,7]
arr1.slice(10,12)//[]
arr1.slice(-4,-2);//[7,"🎉"]

//splice gives a required array but modified the original array.
// syntax arr.splice(startindex,how many items want to delete(delete count), replce the item[item1,item2])
// zero based index=> return a deleted array from start to deleted count numbers

// use case: to duplicate array with shallow copy
//to get subarray without changing original array

const arr2=[1,2,3,4,6,7,9];
arr2.splice(2);//[3,4,6,7,9]; deleted array    //returns deleted elements
//original array [1,2]

arr2.splice(2,3); //[3,4,6]
//[1,2,7,9] original array
arr2.splice(2,2,[4,5]); //[7,9]
arr2.splice(2,3,4,5,6);//[3,4,6]
//original array[1,2,4,5,6,7,9]
arr2.splice(2,0,"✔","❌"); //[]
// original array [1,2,"✔","❌",4,5,6,7,9]
arr2.splice(-3,2);//[6,7,]
//original array [1,2,"✔","❌",4,5,9]

//usecase: remove elements from array, replace elements in array, insert element in array

// polyfills ::: pollyfill is a piece of code(javascript on the web) used to provide modern functionality to older browser //The polyfill uses non-standard features in a certain browser to give JavaScript a standards-compliant way to access the feature.

//reduce callback function take four parameters(accumulator,currentValue,currentIndex,initialValue)

// mdn documents
// arr=[], initialvalue=1; arr.reduce() gives 1 as answer 
// if initalvalue is not defined then acc is arr[0]

const myReduce=(arr,callbackfn,initialValue)=>{
    if(arr.length===0 && initialValue === undefined)
    {
        throw new Error("array can't be empty")
    }
    else{
        let acc=initialValue ?? arr[0]; //2
        let currentIndex=initialValue===undefined ? 1 :0 //if[2,2,3,4]  //curretIndex=1
        for(let i=currentIndex;i<arr.length;i++) // 1 to 4
        {
            console.log(acc,arr[i]);
            acc=callbackfn(acc,arr[i]) //(2,2)=>4 //secondpass(4,3)=>7 //thirdpass (7,4)=>11  fouthpass11
        }
        return acc;
    }

}
            const arr =[2,2,3,4];
            const sum = myReduce(arr,(acc,curr)=> acc + curr);
            console.log(sum);


// new Operator
//the new keyword(operator) in javascript is used to create an instance of object that has a constructor function. 
//four things happen when we use new operator with constructor function
//  1.  it creates new object means empty object
// 2. it binds this to our newly created object
//3.It adds a property onto newly created object which points to the constructor function's prototype object
//4. It adds a "return this" to the end of function,so that the object that is created is return from function

function Student(name,marks){  
// mariya object is created, this is bound to mariya object any references to this points to mariya object
//our_proto-add, mariya_proto_ points to Student.prototype
// mariya object return to mariya variable
    this.name=name;
    this.marks=marks;
    return function(){
        console.log("i am amazing")
    }
    
}

var mariya=new Student("mariya","99");// {"name": "mariya","marks": "99"}
console.log(mariya()); // i am amazing

//what is prototypes
//every JS object has prototype.all objects in javascript inherit their properties and methods from their prototypes.

// EVERY FUNCTION AND OBJECT HAS PROTOTYPE. PROTOTYPE HAS A CONSTRUCTOR FUNCTION WE CAN CREATE A NEW INSTANCE BY CALLING CONSTRUCTOR WITH NEW KEYWORD
// when we use new operator,__proto__ property should have also been added  It should point to the parent constructor.

mariya.__proto__===Student.prototype //true

//Student.prototype.constructor; // run in console
// ƒ Student(name,marks){
//     this.name=name;
//     this.marks=marks;   
// }
Student.prototype.Info = function(){
  console.log(this.name + ' has ' + this.marks + ' in maths ');
}
mariya.Info();

// REST,SPERAD OPERATOR
// REST OPERATOR PUTS SOME OF USER-SPECIFIC VALUES INTO JAVASCRIPT ARRAY
// SPREAD OPERATOR EXPANDS ITERABLES INTO INDIVISUAL ELEMENTS

const mySum=(a,b,c,...rest)=>{
    console.log(a,b,c,rest)
}
mySum(1,12,3,4,5,6,7,8); //1,12,3 [4,5,6,7,8]

const yourSum=(arr1,arr2)=>{
    console.log(...arr1,...arr2)
}
yourSum([1,2,3,4,5],[6,7,8,9,0]); // 1,2,3,4,5,6,,7,8,9,0


//where we sholud not used arrow functions
/*
1. in prototype
2.in constructor function
3. object literal. methods in object
4.arguments
5.working with event handlers
*/ 

const display ={
     count:0,
    increment:function(){
       return this.count++;
    }
}
display.increment();

// compound componnets
// compound componets are used to build declarative and expressive UI which helps to avoid prop drilling.
// The select tag works together with the option tag which is used for a drop-down menu to select items in HTML. Here the <select> manages the state of the UI, then the <option> elements are configured on how the <select> should work.

// compound components are a pattern in which components are used together and communicate with each other by sharig an implicit state.

//In other words, when multiple components work together to have a shared state and handle logic together, they are called compound components.

//When you click on an option, select knows which option you clicked. Like select and option, the components share the state on their own, so you don’t have to explicitly configure them.
