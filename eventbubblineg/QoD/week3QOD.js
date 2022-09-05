//Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

const convertFtoC=(fahrenheit)=>{
    return (fahrenheit-32) *(5/9);
}
console.log(convertFtoC(56));

//Write a program to calculate the sum of N natural digits, as input by the users?
const sumOfNaturaldigits=(number)=>{
    return (number*(number +1)/2)
}
console.log(sumOfNaturaldigits(100));

const sumOfNaturaldigits1=number=>{
    let sum=0;
    for(let i=0;i<=number;i++)
    {
        sum +=i;
    }
    return sum;
}
console.log(sumOfNaturaldigits1(100))

//Write a JavaScript program that reverses a number.

const reverseANumber=number=>{
    let reverse=0;
    while(number>0)
    {
        reverse=(reverse *10) +(number % 10); 
        number=Math.floor(number/10);
    }
    return reverse;
}
console.log(reverseANumber(23567));
//1st phase reverse=0+7=7, number=> 2356
//2nd pass reverse=70 +6 =76 ,number=235 
//3red pass reverse=760 +5 = 765,number=23

//> Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
const calculateKineticEnergy=(m,v)=>0.5 *m *v *v;
console.log(calculateKineticEnergy(3,5));

//Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

const calculateSI=(amount,time,rate)=>(amount*time*rate)/100;
console.log(calculateSI(100,6,2));

//Write a Program to Convert Octal to Decimal.
console.log(parseInt(116,8));
//116=>>>>1*8*8 + 1*8 +6 =64+8+6=78

const convertOctaltodecimal=octalnumber=>{
    let num=octalnumber;
    let decimalValue=0;
    let base=1;
    while(num>0)
    {
        let lastDigit=num%10;
        decimalValue +=lastDigit *base;
        base=base*8;
        num=parseInt(num/10,10); // convert into decimal
    }
    return decimalValue;
}
console.log(convertOctaltodecimal(116));

//Given an object obj, we have to invert its key and value for each entry. Inversion will result in value being used as key and key as value.
//Note:- There will be no repeated values to maintain the uniqueness.
const obj = {
  "name" : "Doraemon",
	"age" : 5,
	"hairColor" : "none",
	"eyes" : "oval"
};
const invert=(obj)=>{
    let resObj={};
    for(let [key,value] of Object.entries(obj))
    {
        resObj[value]=key;
    }
    return resObj;
}
console.log(invert(obj))

//Given an array of numbers, pick any two numbers a  and b, we could get the difference by Math.abs(a - b)  . Write a function to get the largest difference.
let array=[2,4,5,8,9,99];

const largestDiff=arr=>{
    if(arr.length===0) return "empty array";
    let min=arr[0], max=arr[0];
    for(let num of arr)
    {
       min=num < min ? num: min;
       max=num > max ? num: max;
    }
    return Math.abs(min-max);
}
console.log(largestDiff(array));

// Given an array arr with different counts of numbers, we have to find the number with the most frequency and return it. 
//If there are two or more numbers with the same most frequency they return the biggest number.

const mostFreuentArr=arr=>{
    const freq={};
    for(let num of arr){
        if(freq[num]){
            freq[num]++;
        }
        else{
            freq[num]=1;
        }
    }
    // return freq;
    //get the max frequency
    let maxCount=0,res=-1;
    for(let [key,value] of Object.entries(freq)){
        if(value>maxCount)
        {
            maxCount=value;
            res=key
        }
    }
    for(let [key,value] of Object.entries(freq))
    {
        if(value===maxCount && Number(key)>Number(res))
        {
            res=key;
        }
    }
    return Number(res);
    
}
console.log(mostFreuentArr([2,4,78,9,5,78,3,2,78,89]));

// Given an array of integer nums and an integer target, check if there are two numbers in the array such that they add up to target. Return any one pair that add up to the target

const checkIfAdditionEqualsTarget=(arr,target)=>{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=1;j<arr.length;j++)
        {
            if(arr[i] +arr[j]===target)
            {
                return [arr[i],arr[j]]
            }
        }
    }
    return [];
}
console.log(checkIfAdditionEqualsTarget([3,7,11,15],18))

//Given an array and size k, break the array into chunks of k-length and return them as an array.
// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
//Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

const breakAnArrayIntoChunks=(arr,numberOfChunks)=>{
    let count=0;
    let seperateArr=[];
    let finalArray=[];
    if(numberOfChunks <0 || numberOfChunks > arr.length) return `invalid number of chunks`;

    for(let i=0;i<arr.length;i++)
    {
        count++;
        seperateArr.push(arr[i]);
        if(count===numberOfChunks)
        {
            count=0;
            finalArray.push(seperateArr);
            seperateArr=[];
        }
    }
    return finalArray
}
console.log(breakAnArrayIntoChunks([1,2,3,4,8,7,9,10],2));

//Given an array arr with different counts of numbers, we have to find the number with the least frequency and return it.

const findtheLeatFreq=(arr)=>{
    let freq={};
    for(let num of arr)
    {
        if(freq[num])
        {
            freq[num]++;
        }
        else{
            freq[num]=1;
        }
        
    }
    let minCount=arr.length; res=0;
    for(let key in freq)
    {
        console.log(key) 
        if(freq[key] < minCount) // 4<18
        {
            console.log(freq[key])
            minCount=freq[key]; //minCount=4
            if(res < Number(key))  //0<2
             res=Number(key);   //res=2
            }
    }
    console.log(freq)
    return res;
}
console.log(findtheLeatFreq([2,2,2,2, 3, 3, 3, 4, 5, 5, 5, 6, 6,6,8,8,4,4]))

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//we can do this using two ways , move all zeros to new array and non zeros to new array then comnbine then usign spread operator

const moveZeroesToEnd=arr=>{
    let newArray=[];
    let zeroesArray=[];

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===0)
        {
            zeroesArray.push(arr[i])
        }
        else{
            newArray.push(arr[i]);
        }
    }
    return [...newArray,...zeroesArray];
}
console.log(moveZeroesToEnd([0,2,0,3,12,0]))

//using swap and temp variable 
const moveZero=arr=>{
    let swap=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] !==0){
            let temp=arr[swap];  //temp=arr[0]=0
            arr[swap]=arr[i];  // arr[0]=arr[1]=2
            arr[i]=temp; //arr[1]=arr[0]

            swap=swap+1;  //1
        }
    }
    return arr;
}
console.log(moveZero([0,2,3,0,0,12]))

//Given an array nums with length n, return the element which occurred at least n/2 times in the array.
// check the occurance divided by 2;

const mostOccurance=arr=>{
    let frequent={};
    for(let num of arr)
    {
        if(frequent[num])
        {
            frequent[num]++;
        }
        else{
            frequent[num]=1
        }
    }
    for(let no in frequent) //returns keys matlab 2 
    {
      if(frequent[no] > arr.length/2)
      {
        return no;
      }
    }
}
console.log(mostOccurance([2,2,1,1,1,2,2])) //2 are repeated more tha 3.5

//Given a string s, find the first non-repeating character in it and return its index If it does not exist, return -1 
// Input: s = "neogcamp"
// Output: "n"

// Input: s = "nneeooggccaammpp"
// Output: -1

// non repeating chcratcter

const firtsUniqueChar=arr=>{
    let obj={};
    for(let character of arr)
    {
        if(obj[character]){
            obj[character]={...obj[character], val:obj[character]["val"]+1}
        }
        else{
            obj[character]={val:1,index:character}
        }
    }
    for(let no in obj){
        if(obj[no]["val"]===1)
        {
        return obj[no]["index"];
        }
    }
    return -1;
}
console.log(firtsUniqueChar("neoohgg"));