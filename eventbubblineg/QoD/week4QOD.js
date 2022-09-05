//> Given a valid (IPv4) IP `address`, return a defanged version of that IP address.
//Input: address = "255.100.50.0" //Output: "255[.]100[.]50[.]0"

const defangedIP=str=>{
    let newarray=[];
    let address="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===".")
        {
            newarray.push("[.]");
        }
        else{
            newarray.push(str[i]);
        }
    }
    for(let i=0;i<newarray.length;i++)
    {
        address +=newarray[i];
    }
    return address;
}
console.log(defangedIP("255.100.50.0"));

// another solution is

const defangedIP1=str=>{
    let address ="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i] ===".")
        {
           address = address.concat("[.]")
        }
        else{
           address = address.concat(str[i])
        }
    }
    return address;
    
}
console.log(defangedIP1("255.100.50.0"));

//> Given a string `s`, reverse only all the vowels in the string and return it. Input: s = "neoGCamp"
//Output: "naoGCemp"

const reverseVowelsInString=str=>{
    let vowels={a:"a",e:"e",i:"i",o:"o",u:"u",A:"A",E:"E",I:"I",O:"O",U:"U"};
    let reversedStr="";
    let tempArr=[];
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===vowels[str[i]])
        {
        tempArr.push(str[i]);
        }
    }
    for(let i=0;i<str.length;i++){
        if(str[i]===vowels[str[i]])
        {
        reversedStr +=tempArr.pop();
        }
        else{
            reversedStr +=str[i];
        }
    }
    return reversedStr
}
console.log(reverseVowelsInString("neogCamp"));

//> You have been given a string `summerFruits` that are available in summer, and `fruits`
 //representing the fruits you have. Find the summer fruits in the fruits. `summerFruits` is case-sensitive. `(a is not equal to A)`. Each character represents a type of fruit and the fruits present in the summer fruits are unique.
// `Input:` `summerFruits = "aA", fruits = "aaAAbbbb" output:4

const howManyFruitsAreSummerFruits=(summerFruits,fruits)=>{
    let numberofsummerFruits=0;
    let obj={};
    for(let letter of summerFruits){
        obj[letter] =  0 ;//{a:0,A:0}
    }
for(let letter of fruits){
    if(obj[letter] !== undefined){
    obj[letter]++;
    }    
}
for(let key in obj){
    numberofsummerFruits += obj[key];
}
return numberofsummerFruits;

}
console.log(howManyFruitsAreSummerFruits("aA","aAAAbbbaac"));

//Given a string, str, return the length of the last word. "hello neoGrammers" -> 11,

const lengthOfLastWord=str=>{
  let len=0;
  for(let i=str.length-1;i>=0;i--)
  {
    if(str[i]===" " && len>0)
    {
        return len;
    }
    if(str[i] !== " "){
        len=len+1;
    }
  }
  return len;
}
console.log(lengthOfLastWord("hello neogcamp"));

//Given two strings check if the second string is an anagram of first.
//ex: s1="below" s2= "elbow" -> true,

const anagram=(str1,str2)=>{
    let obj={};
    if(str1.length !== str2.length) return "not anagram";
    if(str1===str2) return true

    for(let letter of str1)
    {
        if(obj[letter])
        {
            obj[letter]++
        }
        else{
            obj[letter]=1;
        }
    }
    for(let letter of str2)
    {
        if(!obj[letter])
        {
            return false;
        }
        else{
            obj[letter]--;
        }
    }
    return true
}

console.log(anagram("below","elbow"));

//Given two strings check if the first string can match the second string after some number of shifts.
//ex: s1 = "xyza", s2= "zaxy" -> true

const rotateString=(s1,s2)=>{
    if(s1.length !== s2.length) return false;

    for(let i=0;i<s1.length;i++)
    {
        if(s1===s2)
        {
            return true;
        }else{
            s1=s1.slice(1) +s1.slice(0,1);
        }
    }
    return false;
}
console.log(rotateString("xyza","zaxy"))

//Find the number of consonants and vowels in a string.

const findVowelsandConsonant=str=>{
   let letter={vowels:0,consonants:0}
   for(let i=0;i<str.length;i++)
   {
    if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) || (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122))
    {
        switch(str[i])
        {
            case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
          letter.vowels += 1;
          break;

          default:
            letter.consonants +=1;

        }
    }
   }
   return letter;
}
console.log(findVowelsandConsonant("hmara tumara"));

//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiple of 3 & 5, replace it with "FizzBuzz".
//209 checks

const fizzBuzz=()=>{
    const arr=[];
    for(let i=1;i<=100;i++)
    {
        if( i%3===0 && i%5===0)
        {
        arr.push("fizzbuzz");
        }
        else if(i %3===0)
        {
            arr.push("fizz");
        }
        else if(i%5===0)
        {
            arr.push("buzz")
        }
        else{
            arr.push(i);
        }
    }
    return arr;
}
console.log(fizzBuzz());

//200 checks
const fizzBuzz1 = () => {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }

    arr.push(output || i);
  }

  return arr;
};
console.log(fizzBuzz1())

//raghav bang's questions
//Input: nums = [1,2,3,4]
//Output: [24,12,8,6]
 const productOfArray=arr=>{
    let newarr=[];
    if(arr.length == 1) return `length should be more than 1`;

    // createing 3 diff array
    let left=new Array(arr.length); // length 4
    let right= new Array(arr.length); //length 4
    let product=new Array(arr.length); //length 4
    // in left array the left most elemnt is 1 =>> leftarr[1,...]
    //in right array the rightmost elem is 1 ===>right[...,1];

    left[0]=1; right[arr.length-1]=1;

    //constructing left array
    for(let i=1;i< arr.length;i++)
    {
        left[i]=arr[i-1] *left[i-1]; 
        //left[1]=arr[0] * left[0], 1* 1=>>array becoms [1,1]=>
        //second pass left[2]=arr[1] * left[1] ==>2 *1=[1,1,2]
        //3rd left[3]=arr[2] *left[2] ==> 3*2=6 =>[1,1,2,6];
    }

    //constructing rightarray
     for(let j=arr.length-2;j>=0;j--) //2 thi start to 0
    {
        right[j]= arr[j+1] *right [j+1];    //[0,0,0,1]==iniyially i placed 0
             // right[2]=arr[3] * right[3]= 4 *1==>[0,0,4,1]
             //right[1]=arr[2] *right[2] =3 *4=12 ==>[0,12,4,1];
             // right[0]=arr[1] *right[1]== 2 *12=[24,12,4,1]; 
    }
    for(let i=0;i<arr.length;i++)
    {
        product[i]=left[i] *right[i]; 
        newarr.push(product[i]);
    }
    return newarr;

 }
 //time complexity and space complexity is O(n)//linear time  because we use for loop so
 console.log(productOfArray([1,2,3,4]))
 // revesers a wordor string

 const reverseStr=str=>{
    let output="";
    for(let i=str.length-1;i>=0;i--)
    {
        output+=str[i];
    }
    return output;
 }
 console.log(reverseStr("hello"));

 //InpArr = [1,2,3,4,5] //Output =[2,6,12,20]

 const findProduct=arr=>{
    const newArr=[];
    let product;
    for(let i=0;i<arr.length-1;i++)
    {
      product= arr[i] *arr[i+1];
      newArr.push(product);
    }
    return newArr;
 }
 console.log(findProduct([1,2,3,4,5]));

