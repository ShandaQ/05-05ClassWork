/*## Multiply an Array

Given an array of numbers, and a single factor (also a number), create a new array consisting of each of the numbers in the first array multiplied by the factor. Print this array using `console.log(array);` #array #loop #easy #math #medium*/

var arr = [1,2,3,4,-11,-2,-3,-4,-5,-6,5,6,7,8,9,10,-7,-8,-9,-10];
var factorNum = 5;
var factorArr = [];

for(var i = 0; i < arr.length; i++){
  var factor;

  factor = arr[i] * factorNum;
  factorArr.push(factor);
}

console.log(factorArr);
