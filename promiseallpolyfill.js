//let's take an example of promise.all how it works
//promise.all takes and iteratable array as input and returns aesolved promise if all are resolved and if one one of the promise is rejected the return promise is also rejected

const promise1 = Promise.resolve("hello"); // returns a promise that is resolved with given value;
const promise2 = 42; // if we pass like this it takes as promise.resolve like above
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("namaste JS");
  }, 100);
});
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
); //['hello', 42, 'namaste JS']

Promise.myAll = function (values) {
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
};
Promise.myAll([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));

//WE CAN DO LIKE THIS ALSO

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
    .catch((err) => console.log(err))
);
// let's see what we have done till now.
//1. first we create a promise.myAll with function which takes the iteratable array.
//2. it returns a new promise which is resolved if all promise is resolved
//3. we iterate through all promises one by one but problem is that , if like promise2 resolved early compare to other then the the ordered of result is also chnaged so we doesn't want this
//4. we use flag complete and for new array we take empty array
//5 it stores result based on index result[3]=result
//6 if all completed flag is equal to length of input promises then we reolves that
//7 but suppose id someone put like only number like promise2, then we also have to handle this case
// so we wrap up value.then which return promise into Promise.resolve;
