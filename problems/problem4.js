let verifyEquals = require('./verify-equals.js');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2]
]

let outputs = [
  "o",
  undefined
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
    
}

function runTest(i) {
    let expected = outputs[i];
    let input = inputs[i];
    let actual = f(input[0], input[1]);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("All tests passed for " + __filename)