let eq = (lhs, rhs) => {
  if (Array.isArray(lhs)) {
    for (let i = 0; i < lhs.length; i++) {
      if (lhs[i] !== rhs[i]) return false;
    }
    return true;
  }
  return lhs === rhs;
};
let verifyEquals = (lhs, rhs) => {
  if (!eq(lhs, rhs))
    throw new Error("The expected output doesn't match the actual output");
};
// we need 6 test cases.
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["mult", 6, 9],
  [5, 10],
  ["add", 40, 1, 2],
  ["sub", 14, 3]
];

let outputs = [30, undefined, 54, undefined, undefined, 11];

/*
The function takes an array. The array has length 3. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  let operator = ["add", "sub", "mult"];

  if (
    arr.length !== 3 ||
    typeof arr[0] !== "string" ||
    operator.every(elem => {
      return elem !== arr[0];
    })
  ) {
    return undefined;
  }

  if (arr[0] === "add") {
    return arr[1] + arr[2];
  }

  if (arr[0] === "sub") {
    return arr[1] - arr[2];
  }
  return arr[1] * arr[2];
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  console.log(expected, actual);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
console.log("All tests passed for " + __filename);
