/*## Matrix Addition

Given two two-dimensional arrays of numbers of the size 2x2
two dimensional array is represented as an array of arrays:

```
[ [2, -2],
  [5, 3] ]
```

Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

```
1 3
2 4
```
and
```
5 2
1 0
```
results in
```
6 5
3 4
```
#math #loop #array #medium
*/

var arr1 = [[1,3],[2,4]];
var arr2 = [[5,2],[1,0]];
var finalArr = [];
var value;

for(var i = 0; i < arr1.length; i++){
  var sumArr = [];
  for(var j = 0; j < arr2.length; j++){
    //sumArr[j] = [];
      value = arr1[i][j] + arr2[i][j];
      sumArr.push(value);
  }
  finalArr.push(sumArr);
}

console.log(arr1);
console.log(finalArr);



/*## Matrix Addition II

Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

#math #array #loop #medium */

var arr3 = [[1,3],[2,4],[2,4]];
var arr4 = [[5,2],[1,0],[1,0]];
var anySizeArr = [];
var value2;

for(var i = 0; i < arr3.length; i++){
  var sumArr1 = [];
  for(var j = 0; j < arr4.length; j++){
    //sumArr[j] = [];
      value2 = arr3[i][j] + arr4[i][j];
      sumArr1.push(value2);
  }
  anySizeArr.push(sumArr1);
}
console.log();
console.log("Sum of 2d array of anysize");

console.log("First Array" + arr3);
console.log("Second Array" + arr4);
console.log(anySizeArr);
