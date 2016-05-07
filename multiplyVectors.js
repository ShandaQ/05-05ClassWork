/*## Multiply Vectors

Given two arrays of numbers of the same length, create a new array by multiplying the pairs of numbers in corresponding positions in the two arrays. Example:

[2, 4, 5] x [2, 3, 6] = [4, 12, 30]

#array #loop #medium #math*/

var arr1 = [2, 4, 5];
var arr2 = [2, 3, 6];
var multipliedArr = [];
var Multiply;

for(var i = 0; i < arr1.length; i++){
    Multiply = arr1[i] * arr2[i];
    multipliedArr.push(Multiply);
}

console.log(multipliedArr);
