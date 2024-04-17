// remove duplicates from array
function removeDuplicates(arr) {
  let output = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      output.push(arr[i]);
    }
  }
  return output;
}
//method2
console.log(removeDuplicates([1, 2, 3, 6, 4, 5, 2, 3, 4, 5, 6, 10, 12]));
const array1 = ["m", "a", "r", "i", "y", "a"];
console.log(
  array1.filter((Element, index) => array1.indexOf(Element) === index)
);
//method3
console.log([...new Set(array1)]);
// reduce method
console.log(
  array1.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, [])
);

// find the second largest and largest and smallest number in array.
const numbers = [10, 20, 99, 300, 899, 990, 1000, 5, 6, 8, 989];

function findSecondLargest(arr) {
  let largest = arr[arr.length - 1];
  let smallest = arr[0];
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    } else if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return { smallest, largest, secondLargest };
}
console.log(findSecondLargest(numbers));

//map method polyfill
const calculate = (num) => num * 2;
Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]));
  }
  return output;
};
console.log([1, 2, 3, 4, 5, 6].myMap(calculate));

//filter method polyfill
const Findeven = (num) => num % 2 === 0;
Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};
console.log(
  [1, 2, 3, 4, 5, 6, 10, 8, 12, 11, 13, 15, 17].myFilter(Findeven),
  "filter polyfill"
);
// find method
Array.prototype.myFind = function (callback) {
  let output = "";
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output += this[i];
      break;
    }
  }
  return output;
};
console.log(
  [1, 1, 3, 4, 5, 6, 10, 8, 12, 11, 13, 15, 17].myFind(Findeven),
  "find polyfill"
);

// reduce method
// acc,initialvalue,callback;
Array.prototype.myReduce = function (callback, initialvalue) {
  if (initialvalue === undefined && this.length === 0) {
    throw new Error("array can't be empty");
  } else {
    let acc = initialvalue ?? this[0];
    let currentIndex = initialvalue === undefined ? 1 : 0;
    for (let i = currentIndex; i < this.length; i++) {
      acc = callback(acc, this[i]);
    }
    return acc;
  }
};
console.log([1, 2, 3, 4, 5, 6, 7].myReduce((acc, curr) => acc + curr, 0));

//my promise.all polyfill
const promise1 = Promise.resolve("hello"); // returns a promise that is resolved with given value;
const promise2 = 42; // if we pass like this it takes as promise.resolve like above
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("namaste JS");
  }, 100);
});
let promises = [promise1, promise2, promise3];
function myAllPromise(values) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let results = [];
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          completed++;
          results[index] = result;
          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
console.log(
  myAllPromise(promises)
    .then((values) => console.log(values))
    .catch((err) => console.error(err))
);

//rearrangezeroes
const zeronumbers = [0, 2, 3, 0, 0, 5, 6, 0, 10, 11];
function reArrangeZeroes(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      output.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(reArrangeZeroes(zeronumbers));

// roman to integer LVIII
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
function romanToInteger(str) {
  let output = 0;
  let romanDetails = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < str.length; i++) {
    if (romanDetails.hasOwnProperty(str[i])) {
      if (romanDetails[str[i]] < romanDetails[str[i + 1]]) {
        output += romanDetails[str[i + 1]] - romanDetails[str[i]];
        i++;
      } else {
        output += romanDetails[str[i]];
      }
    }
  }
  return output;
}
  console.log(romanToInteger("MCMXCIV"));

// integer to roman
function integerToRoman(number) {
  let result = "";
  const romanNumberDetails = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  for (let i = 0; i < romanNumberDetails.length; i++) {
    while (number >= romanNumberDetails[i].value) {
      result += romanNumberDetails[i].symbol;
      number -= romanNumberDetails[i].value;
    }
  }
  return result;
}
console.log(integerToRoman(1994), "result dekho");

//second solution
var intToRoman = function (num) {
  const M = ["", "M", "MM", "MMM"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] +
    I[num % 10]
  );
};
console.log(intToRoman(1994), "result dekho method 2");

// two sum
// Input:nums=[2,7,11,15] target=13;
function findTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return { i, j };
      }
    }
  }
}

console.log(findTwoSum([2, 7, 11, 15, 9, 8], 9));

// three sum
const nums1 = [-1, 0, 1, 2, -1, -4];
//Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
function threeSum(arr) {
  let result = [];
  var left = 0;
  var right = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    left = i + 1;
    right = arr.length - 1;
    while (left < right) {
      // console.log(left,right,i,"dekho iteration")
      if (arr[i] + arr[left] + arr[right] < 0) {
        left++;
      } else if (arr[i] + arr[left] + arr[right] > 0) {
        right--;
      } else {
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//reverse integer
function reverseInteger(number) {
  const reversedNumber = parseInt(
    Math.abs(number.toString().split("").reverse().join(""))
  );
  if (reversedNumber > 2147483647) return 0;
  return number < 0 ? -Math.abs(reversedNumber) : reversedNumber;
}
console.log(reverseInteger(123));

// second solution use reminder 123%10 =23

function reverseInteger1(number) {
  let reverseNumber = 0;
  let lastDigit = 0;
  while (number !== 0) {
    lastDigit = number % 10;
    number = parseInt(number / 10);
    reverseNumber = reverseNumber * 10 + lastDigit;
  }
  return reverseNumber;
}

console.log(reverseInteger1(123));

// palindrome  numbers
//121===reverse 121==true
function Palindrome(number) {
  const reversedNumber = parseInt(
    Math.abs(number.toString().split("").reverse().join(""))
  );
  if (number === reversedNumber) return true;
  else return false;
}
console.log(Palindrome(121));

//longest common prefix
// find longest comman prefix
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const findlongestPrefix = (arr) => {
  let firstStr = arr[0];
  let output = "";
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (firstStr.charAt(i) !== arr[j].charAt(i)) {
        return output;
      }
    }
    output += firstStr.charAt(i);
  }
  return output;
};
console.log(findlongestPrefix(["flower", "flow", "flight"]));

// valid parenthesis
// expression ="{()[]}"
function checkIfParenthesisValidorNot(str) {
  let result = [];
  const mappingItems = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < str.length; i++) {
    // it checks the all keys of object , means it checks ({[ these keys
    if (str[i] in mappingItems) {
      result.push(str[i]);
    } else {
      const lastItem = result.pop();
      if (str[i] !== mappingItems[lastItem]) {
        return false;
      }
    }
  }
  return result.length === 0;
}
console.log(checkIfParenthesisValidorNot("{[()[]]}"));

//  occurance of every character in string
// str="mariyasada";

function occuranceOfEveryCharacter(str) {
  const newStr = str.split("");
  return newStr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}
console.log(occuranceOfEveryCharacter("mariyasada"));

// most occured character
function mostOccurance(str) {
  let myObj = {};
  let element;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (myObj[str[i]]) {
      myObj[str[i]] += 1;
    } else {
      myObj[str[i]] = 1;
    }
  }
  for (const i in myObj) {
    if (max < myObj[i]) {
      max = myObj[i];
      element = i;
    }
  }
  console.log(`most occurance element is ${element} and it is ${max} times`);
  return myObj;
}
console.log(mostOccurance("mariyasada"));

// remove duplicates from sorted array
var removeDuplicates = function (nums) {
  let i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      console.log(i, j, "indexes");
      i++;
      nums[i] = nums[j];
      console.log(nums, nums[i], nums[j], "check data");
    }
  }
  return i + 1;
};

//
var removeDuplicates = function (nums) {
  // Length of the updated array
  let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to the next element, we skip
    if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      continue;
    }
    // We will update the array in place
    nums[count] = nums[i];
    count++;
  }
  return count;
};
console.log(removeDuplicates([1, 1, 2]));

// seearch insert options
function lowerBound(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1; //3
  let ans = arr.length; //4
  while (low <= high) {
    //3<4
    let midElement = low + Math.floor(high - low / 2);
    if (arr[midElement] < target) {
      // 3<2
      low = midElement + 1;
    } else {
      ans = midElement; // candidate ans
      high = midElement - 1; //
    }
  }
  return ans;
}
console.log(lowerBound([1, 3, 5, 6], 2));

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
