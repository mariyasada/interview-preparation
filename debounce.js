// debounce makes sure that the code triggered only when user has finished typing, or we can say that user are not active at certain time dalay.
//suppose let's take an example we craete a function getData() this function is call when user press the key or enter text in input

// practice data attribute for css
console.log(document.querySelector(".fish").dataset.animalType);
//ends here data wala

let counter = 0;
const getData = () => {
  console.log("fetching Data", counter++);
};
// when user type schoolbag , it has 9 characters, so make api call request 9 times, it affects the performance of application, so debounce comes into picture, when user finished tying like schoolbag (word) after finishing typing make api call request inly for once
// if i type laptop then api call makes for laptop then i type lenovo appending after laptop then second api call happens for lenovo laptop . this is debounce. how we can achieve it . le's take an example

// we are trying to make a debounce function which takes function and some delay time, if user is inactive for this amount of delay after that make a api call if user type makeup so first request  is maked for makeup after 3000ms delay if user type maybelline then for maybelline the request is proceed.

const debounce = function (func, delay) {
  let timer;
  return function (...args) {
    //cancels the previous timer
    clearTimeout(timer);

    //set up new timer
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 500);

//kushank's function
const debounce1 = (func, delay) => {
  let timerId = null;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func(...args), delay);
  };
};

const debouncedFunc = debounce1(getData, 500);

// so what happens i this implementation when user type something debounce reset the timer with cleartimeout
// ..args allows you to collect all the arguments of the fn() function into an array args. if debounce has more than two arhuents

// THROTTLING:
//function gets callaed after certain amount of time limit is exceeded. suppose user clicks a button multiple time but you set the time delay 200ms , so first function call happened at first click and second function call happens after 200ms amount of delay. the other calls between these 2 call get discarded.

//let's implement throttle, what we are goiing to do suppose thefirst click happend when flag is true after function gets invoked we set the flag false, and after exceeding certain amount time we makes flag true gain

let count = 0;
const expensiveThrottle = function () {
  console.log("clicks are expensive", count++);
};

const myThrottled = function (func, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
// kushank's
const myThrottled1 = function (func, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      func(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterthrottle = myThrottled1(expensiveThrottle, 1000);
