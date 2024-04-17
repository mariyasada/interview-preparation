let a = 30;
{
  let a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); //20
  console.log(c); //30
}
console.log(a); // 30
// console.log(a);// 10 because of shadowing
// console.log(b); // b is not defined
// console.log(c);

//js methods
//find method used when we have to find first element which satisfy the testing function like we have to find object which has a value greater than 30

let arr = [
  { name: "x", value: 20 },
  { name: "y", value: 60 },
  { name: "z", value: 40 },
];
console.log(arr.find((i) => i.value > 30));

//findindex
//it returns the index of firstelement which satisfy the testing function
console.log(arr.findIndex((i) => i.value > 30)); // 1

//findLastIndex
//it gives the index of first element which satisfy the condition but it iterates in reverse order
const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber)); //3

//findLast
//it gives the value of first element which satisfy the condition but it iterates in reverse order
const isLargeNumber1 = (element) => element > 45;
console.log(array1.findLast(isLargeNumber1)); //130

//compare new methods with the older one
//sort
//array method which sorts the element of the array in place nad returns the reference to same array means it modifies the original array
const array2 = [1, 30, 4, 21, 100000];
const array3 = array1.sort();
console.log(array2, array3); //[1,100000,21,30,4] [1,100000,21,30,4]

//what if the array contains empty value like
// const array2 = [1, 30, 4, 21, ,100000];
// const array3 = array1.sort();
// console.log(array2, array3);  //[ 1, 100000, 21, 30, 4, <1 empty item> ] [ 1, 100000, 21, 30, 4, <1 empty item> ]

//tosorted
// it is copying version of sort method but it returns a new array with sorted elements in acsending order
// const array2 = [1, 30, 4, 21, 100000];
// const array3 = array1.toSorted();
// console.log(array2, array3); [1, 30, 4, 21, 100000]; [1,100000,21,30,4]

//Empty slots are sorted as if they have the value undefined. They are always sorted to the end of the array and compareFn is not called for them.
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]

//reverse
//The return value of toReversed() is never sparse. Empty slots become undefined in the returned array.
//console.log([1, , 3].toReversed()); // [3, undefined, 1]

//splice
//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place . splice method returns the array of deleted items and changes the original array
// toSpliced -It returns a new array with some elements removed and/or replaced at a given index.

const months = ["Jan", , "Apr", "May"];
const months2 = months.toSpliced(1, 0, "Feb", "Mar");
console.log(months, months2); //[ "Jan", "Apr", "May"], [ "Jan","Feb","March" "Apr", "May"]

// const months = ["Jan", , "Apr", "May"];
// const months2 = months.splice(1, 0, "Feb", "Mar");
// console.log(months, months2); //[ "Jan","Feb","March" "Apr", "May"], []
//the return value of splice (months2) will be an empty array because no elements were deleted (the second parameter is 0). The modified months array will contain the inserted elements.
