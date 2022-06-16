// Question: Given a deeply nested array, create a function on the array, namely flatten, that when invoked returns
//  * a flat version of the original array. Function should be defined in a way that it can be invoked on existing
//  * and future arrays. 
//  * 
//  * 
    var input = [
        1, 2, 3,
        [4],
        [5, 6, [7], [8, [9, [10]]]],
        11, 12, 13,
        [14, [[[[[15, [16]]]]]]],
        17, 18,
        [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
    ];

    //  THIS IS NOT A GOOD SOLUTION FOR FLATTEN

    function flatIt() {
        // this keyword is one of the way to access input in this function
        return this.toString().split(",").map(element=>Number(element));
    }

// Array.prototype.flatten=flatIt;
// console.log(input.flatten()) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// SECOND SOLUTION FOR FLATTEN
function flatten()
{
    let output=[];

    function processingArray(arr)
    {
           for(let i=0;i<arr.length;i++)
           {
              let currentElement=arr[i];
              /**?
               *  //Array.isArray() is a static property of the JavaScript Array object.You can only use it as Array.isArray().
               * The isArray() method returns true if an object is an array, otherwise false.
               * 
               */
              if(Array.isArray(currentElement))
             
              {
                processingArray(currentElement)
              }
              else{
                output.push(currentElement);
              }
           }
           
    }
    processingArray(this);
    return output;
}
///* prototype is an existing inbuilt functionality in javascript, whenever we craete a function, javascript adds a prototype to that function. prototype is an object prototype allows you to add new properties and methods to array object.*/ */
//prototype is a property available with all JavaScript objects.

// Array.prototype.flatten=flatten;
console.log(input.flatten());
