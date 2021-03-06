/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/

function sumAll(arr) {
  var largerNum = Math.max(arr[0], arr[1]);
  var smallerNum = Math.min(arr[0], arr[1]);
  var output = 0;

  for (var i = smallerNum; i <= largerNum; i++) {
    output += i;
  }
  return output;
}

// Test
sumAll([1, 4]); // should return 10.
sumAll([4, 1]); // should return 10.
sumAll([5, 10]); // should return 45.
sumAll([10, 5]); // should return 45.
