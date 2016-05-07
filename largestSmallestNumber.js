/*## Largest Number

Given an array of numbers, print the largest of the numbers. #array #loop #if #easy

## Smallest Number

Given an array of numbers, print the smallest of the numbers. #array #loop #if #easy*/

var arr = [4,5,6,7,44,6,7,9,100,1];
var largest;
var smallest;

/*Finding the largest number in the array*/
for(var i = 1; i < arr.length; i++){
  var temp = arr[0];

  if(arr[i] > temp){
    temp = arr[i];
    largest = temp;
  }
}

/*Finding the smallest number in the array*/
for(var i = 1; i < arr.length; i++){
  var temp = arr[0];

  if(arr[i] < temp){
    temp = arr[i];
    smallest = temp;
  }
}


console.log("The largest number is this array is: " + largest);
console.log("The smallest number is this array is: " + smallest);
