/*## Sum the Numbers

Given an array of numbers, print their sum. #array #loop #easy*/

var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;

for(var i = 0; i < arr.length; i++){
  sum+= arr[i];
}

console.log("The sum of this array is: " + sum);
