
function makeItUnique(array) {
  var uniqueArray = [];
  var map = {};

  for (var i = 0; i < array.length; i++) {
    console.log(map[array[i]],"hello")
    if (!map[array[i]]) {
      uniqueArray.push(array[i]);
      map[array[i]] = true;
    }
  }
  return uniqueArray ;
}

console.log(makeItUnique([1,2,3,4,2,3,2,5]));

// another method
function makeItUnique1(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var exists = false;
    for (var j = 0; j < result.length; j++) {
        console.log(result[j],"j")
      if (array[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(makeItUnique1([1,2,3,4,2,3,2,5]));