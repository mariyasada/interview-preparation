// for map method we need array and callback function (logic what we have to dowith array)
// suppose we have array of radius and we want to find area so first we create a function we calculate arae  then we map this for all radius
//array.prototypr.calculate is available for all array
const radius=[1,2,3,4];
console.log(radius.map((arr)=>Math.PI *arr *arr));
// lets try to make a pollyfill type function
const area=(arr)=>{
    return  Math.PI *arr *arr
}
const calculate=(arr,callbackfn)=>{
    let output=[];
    for(let i=0;i<arr.length;i++)
    {
        output.push(callbackfn(arr[i]))
    }
    return output;
    
}
console.log(calculate(radius,area))
 // this is good code but you can do with this prototype also

 Array.prototype.calculate=function (callbackfn){ // if we are used arraow function in this then it's not supported.becuase in arraow function this refere to window object not the input value
    let output=[];
    console.log(this);
    for(let i=0;i<this.length;i++)
    {
        output.push(callbackfn(this[i]))
    }
    return output;
 }
 console.log(radius.calculate(area));

 Array.prototype.printName=function(){
    console.log("hello");
 }
 radius.printName();


 // filter pollyfill
const numbers=[2,4,5,6,7,9,8];
 const isEven=function (arr){
   if( arr %2===0){
    return arr;
   }
   
 }

 Array.prototype.filterEvenNumbers=function(callback){
    let output=[];
    for(let i=0; i<this.length;i++)
    {
        if(callback(this[i])) // when we are not applying this condition the output is[2,4,undefined,6,undefined,undefined,8]
        // so we are checking id it is even then return otherwise don't
        {
            output.push(this[i])
        }
       
    }
    return output;
 }
 console.log(numbers.filterEvenNumbers(isEven));

 // find method pllyfill
 // find returns the first element which passed the test provided by callback function

 Array.prototype.findNumber=function (callback){
    let output="";
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i]))
        {
            output +=this[i];
            break;
        }
    }
    return output;
 }
 console.log(numbers.findNumber(isEven));

 ///reduce pollyfill

 Array.prototype.myReduce=function(callback,initialValue){
    if(initialValue===undefined && this.length===0)
    {
       throw new Error("array can't be empty");
    }
    else{
        let acc=initialValue ?? this[0];
        let currentIndex=initialValue===undefined ?1:0;
        for(let i=currentIndex;i<this.length;i++)
        {
            acc=callback(acc,this[i]);
        }
        return acc;
    }
 }
 const sum= (acc,curr)=>acc+curr;
 console.log([1,2,3,4].myReduce(sum,0));



