/*## Positive Numbers

Given an array of numbers, print each number in the array that is greater than zero. #array #loop #if #easy

## Positive Numbers II

Given an array of numbers, create a new array which contains every number in the given array which is positive. #array #loop #if #medium*/

var arr = [1,2,3,4,-11,-2,-3,-4,-5,-6,5,6,7,8,9,10,-7,-8,-9,-10];
var positiveArr = [];
var negativeArr = [];

for(var i = 0; i < arr.length; i++){
  if(arr[i] > 0){
    positiveArr.push(arr[i]);
    //positiveArr[i] = arr[i];
    //arr.shift();
    //delete arr[i];
    //var index = arr.indexOf(i);
    //arr.splice(index, 1);
  }
  else{
    negativeArr.push(arr[i]);
  }
}

console.log("Here are the negative numbers from the original array" + negativeArr);
console.log("Here are the positive numbers from the original array" +positiveArr);
