//A program that reads a string and counts the number of characters present in the string

const numberOfChar=str=>{
    let count=0;
    const trimmString=str.trim();
    for(let i=0; trimmString[i]!== undefined;i++)
    {
        if(trimmString[i] !== " "){
        count++;
        }
    }
    return count;
}

console.log(numberOfChar("  i am mariya "));

//Write a program that removes the time from the given date string "Wed April 15, 7 pm". It should return only the date without the time.

const returnOnlyDAte=str=>{
    let outputDate="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===",")
        break;
        outputDate=outputDate+str[i];
    }
    return outputDate;
}
console.log(returnOnlyDAte("wed 15 april,7pm"))

//Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.

const removeallSpace=str=>{
    let newString="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i] !== " ")
        {
            newString +=str[i];
        }
    }
    return newString;
}
console.log(removeallSpace("    we  are    neogrammers"));

//Write a program that masks all but the last four characters of the string "5565534276455423" to '#'

const maskAString=(str)=>{
    let resultStr="";
    if(str.length<4)
    {
        return str;
    }
    else{
        let i=0;
    for(i;i<str.length-4;i++)
    {
        resultStr += "#";
    }
    for(i;i<str.length;i++)
    {
        resultStr += str[i];
    }
    return resultStr;
    }
}
console.log(maskAString("55456789233556"));

//here if we are trying to declare let i=0 in for loop for two times means it takes 2 separate variable for i in blcoke scope so it repeated for whole string so we initialize above the for loops

// Given a string, determine if it is a palindrome, considering only alphanumeric characters

const checkPalindrom=str=>{
    let i=0;j=str.length-1;
    while( i<  j)
    {
      if(str[i++] !== str[j--])
      {
        return false;
      }
    }
    return true;
}
console.log(checkPalindrom("madam121madam")? console.log("it's is palindrom"):console.log("it's is not palindrom"));

//Reverse the given string word wise. That is, the last word in a given string should come at 1st place, the last-second word at 2nd place and so on. Individual words should remain as it is. example: Input: Welcome to neoG Camp → Camp neoG to Welcome

const reverseStringWithorder =(str)=>{
    const splitStr=str.split(" ");
    let resultStr="";
    for(let i=splitStr.length-1;i >=0; i--)
    {
        resultStr +=splitStr[i];
        console.log(resultStr,"1st");
        if(i > 0)
        {
            console.log("rtest");
            resultStr += " ";
            console.log(resultStr,"2nd");
        }
    }
    return resultStr;
}
console.log(reverseStringWithorder("welcome to the hell"))

//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted by the user. Example:Input: findMax(3,5) ––> Output: 5Input: findMax(3,5,9,1) ––> Output: 9

const findMax=(...args)=>{
    let maxElem=args[0];
    for(let i=0;i<args.length;i++)
    {
        if(maxElem < args[i]){
            maxElem=args[i];
        }
    }
    return maxElem
}
console.log(findMax(3,6,80,99));

//Given a string and an index, your function should return the character present at that index in the string.Example:Input: charAt("neoGcamp", 4) ––> Output: c

const findcharAt=(str,index)=> str[index]
console.log(findcharAt("neogCamp",4));

//Write a program to take a day as input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

// we can do this using switch case

const weekdayNotifier = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "It's a weekday";
    case "saturday":
    case "sunday":
         return "It's weekend";
    default:
      return "Day does not exists";
  }
};
console.log(weekdayNotifier("MONDAY"));

//Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example: Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const ISTriangle=(...args)=>{
    if(args.length !==3) return "invalid arguments,insert 3 angles!!";
    for(let arg of args)
    {
        if(arg <=0 || typeof arg !=="number") return `${arg} is an invalid angle`;
    }
    const [angle1,angle2,angle3]=args;
    let sum=angle1+ angle2 +angle3;
    if(sum !== 180) return " it is not a triangle";
    else{
        if(angle1 === angle2 && angle2===angle3)
        {
            return `Equilateral`;
        }
        if(angle1 === angle2 || angle2 ===  angle3 || angle1 === angle3)
        {
            return `isosceles`
        }
        return `scalene`;
    }
}
console.log(ISTriangle(20,45,45));

//Given two dates, your function should return which one comes before the other. Example: Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// so here is the date in dd-mm-yyyy format but standard js format is mm-dd-yyyy so first we have to covert into starndard format.

const convertIntoStandardFormat=(dateStr)=>{
    // split date into array then combine into new string
    let newDateStr="";
    let splitDate=dateStr.split("/");
    for(let i=0;i<splitDate.length;i++)
    {
        if(i==0)
        {
            newDateStr +=splitDate[1] +"/";
        }
        else if(i==1)
        {
            newDateStr +=splitDate[0] +"/";
        }
        else newDateStr +=splitDate[i];
    }
    return newDateStr;
}

const findMinimum=(date1,date2)=>{
    const newDate1=convertIntoStandardFormat(date1);
    const newDate2=convertIntoStandardFormat(date2);
     return new Date(newDate1) > new Date(newDate2) ? `${newDate2} is minimum` : `${newDate1} is minimum`; 
}
console.log(findMinimum('02/05/2021', '24/01/2021'));
//> Write a JavaScript program to compute the sum of all digits that occur in a given string.
 //`Input: 1234 Output: 1+2+3+4 = 10`
const findSumofStringDigit=str=>{
    let sum=0;
    for(let num of str)
    {
        sum += Number(num);
    }
    return sum;
}
console.log(findSumofStringDigit('2345'));

// Write a Program to convert Decimal to Binary.

const decimalToBinary=decimal1=>{
    const binaryArr=[];
    let temp = decimal1;
    while(temp){
        let value=binaryArr.unshift(temp%2);
        console.log(value,binaryArr,"binaarra");       
        temp=Math.floor(temp/2);
        console.log(temp,"temp");
    }
    return binaryArr.join('')- 0;
}
console.log(decimalToBinary(5))

// Write a Program to Print N Odd Number in Descending Order.
const printODDNumberINdecending=number=>{
    let oddNum;
    for(let i=number;i>0;i--)
    {
         oddNum=i*2-1;
        console.log( oddNum);
    }
}
console.log(printODDNumberINdecending(4));

//> Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
// Example-
//  `Enter a Number: 1234
// > Enter the Number of Rotations: 2
// > Output: 3412`

const rotateNumberByXPostion=(number,rotation)=>{
    let numInStr=number.toString();
    let actualRotation= rotation  % numInStr.length // actually gives 2;
    const rotateStr= numInStr.slice(rotation) + numInStr.slice(0,rotation);
    return parseInt(rotateStr,10)// convert  stringninto decimal
}
console.log(rotateNumberByXPostion(1234,3));
