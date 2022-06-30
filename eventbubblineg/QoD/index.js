//Given a and b, your function should return the value of a^b

const powerFunction=(a,b)=> a**b;
console.log(powerFunction(3,2)); //9 sqaure of 3

// Given an array, your function should return the length of the array.

var length=0;
const findLength=arr=>{
    for(let i=0; arr[i]!==undefined;i++)
    {
        length++;
    }
    return length;
}

console.log(findLength([1,2,3,4,5])); //5

//another solution 
const Length=arr=>{
    for(var i=0; arr[i]!==undefined;i++);
    return i;
}
console.log(Length([1,2,3,4,5])); 
//you can do this using prototype array.prototype.length, replace arr[i] with this[i]
Array.prototype.proLength = function(){
	for(var i = 0; this[i] !== undefined ; i++);
	return i;
}
console.log([1,2,3,4].proLength())

//Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHexagon=sideLength=> ((3 *Math.sqrt(3)/2)* sideLength *sideLength).toFixed(2);
console.log(areaOfHexagon(10))

//Given an array and an item, your function should return the index at which the item is present.
const findIndexOfItem=(arr,key)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===key)
        {
            return i
        }
    }
}
console.log(findIndexOfItem([1,2,3,4,5,6],3)); //2

//Given a sentence, your functions should return the number of words in the sentence.
const countNumberOfWords=sentence=>{
    let count=0;
    const trimmedSentence=sentence.trim();
    console.log(trimmedSentence); //we are neogrammers
    for(let i=0;i<trimmedSentence.length;i++)
    {
        if(trimmedSentence[i]=== " " && trimmedSentence[i+1]=== " ")
        {
         continue;
        }
         else if(trimmedSentence[i]=== " ")
         {
            count++;
         }
    }
    return count + 1;
}
console.log(countNumberOfWords("   we are neogrammers   ")); //3

//Given an array and two numbers, your function should replace all entries of the first number in an array with the second number.
// replace([1, 5, 3, 5, 6, 8], 5, 10) =>> all 5 is replace with 10

const replacenum=(arr,num1,num2)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== num1){
            arr[i]=num2
        }
    }
    return arr;
}
console.log(replacenum([1,4,3,4,6,7,4],4,10));

//Given an array of numbers, your function should return an array in the ascending order.
//Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

//bubble sort

const sortArray=arr=>{
    for(let i=0;i<arr.length;i++)
    {
        let isSwapped=false; // initial value of flag is false, if sawpping occur we make it true;
        for(let j=0; j<arr.length-i-1;j++)
        {
            if(arr[j] > arr[j+1])
            {
                isSwapped=true;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
        if (isSwapped === false) {
      //array is already sorted
      break;
    }
    }
    console.log(arr);
}
sortArray([100, 83, 32, 9, 45, 61, 45]);

//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

const findMinimum=(...args)=>{
    let min=args[0];
    for(let i=0;i<args.length;i++)
    {
        if(args[i]<min)
        {
            min=args[i];
        }
        
    }
    return min;
}
console.log(findMinimum(3,5,9,1));

//Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const mergedArray=(arr1,arr2)=>{
    let mergedarr=[];

    const pushToArr=(arr)=>{
     for(let i=0;i<arr.length;i++)
     {
        mergedarr.push(arr[i]);
     }
    };
    pushToArr(arr1);
    pushToArr(arr2);
    return mergedarr;
}
console.log(mergedArray([1,2,3],[8,4,5,6])); //[1, 2, 3, 8, 4, 5, 6]

//we can do this using spread operator also like mergedarr=[..arr1,...arr2];

//Given a sentence, your function should reverse the order of characters in each word, keeping the same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharacterofWord=(str)=>{
    let reverseStr="";
    let temp="";
    for(let i=str.length-1;i>=0;i--){
       if(str[i]==="")
       {
        reverseStr = " " +temp+reverseStr;
        console.log(reverseStr,"reverse");
       }
       else{
        temp =temp +str[i];
        console.log(temp,"count1")
       }
    }
    reverseStr=temp+reverseStr;
    return reverseStr

}
console.log(reverseCharacterofWord("we are neogrammers"));

//Write a program that takes two strings and copies smaller strings into a bigger string.

const copysmallerString=(str1,str2)=>{
    if(str1.length>str2.length){
        return str1+=str2;
    }
    else{
        return str2+=str1;
    }
}
console.log(copysmallerString("small","big string")); //bigstringsmll

//Write a program that converts the string into uppercase.

const convertIntoUpperCase=(str)=>{
    let result="";
    for(let letter of str){
        let ascii=letter.charCodeAt(0); // convert into unicode at specifix index
        if(ascii>=97 && ascii<=122)
        {
            ascii-=32;
        }
        result =result +String.fromCharCode(ascii); //convert unicode values to charcter
    }
    return result;
}
console.log(convertIntoUpperCase("kuch bhi"));

//Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string.

const replaceCharactersInstr=(str,ch1,ch2)=>{
    let result="";
    for(let letter of str )
    {
        console.log(letter)
        if(letter===ch1){
           
            letter=ch2;
        }
        result=result + letter;
    }
    console.log(result);
    return result;
}
console.log(replaceCharactersInstr("aaloo","o","a"));

const replaceCharactersInstr1=(str,ch1,ch2)=>{
    let result="";
    for(let i=0;i<str.length;i++ )
    {
        let currelement=str[i];
        if(currelement===ch1){
           
            currelement=ch2;
        }
        result=result + currelement;
    }
    console.log(result);
    return result;
}
console.log(replaceCharactersInstr1("aaloo","o","a"));






