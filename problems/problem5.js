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
// we need 5 test cases.
let inputs = [[2, 7], [3, 5, 10], ["string", 2], [4, 7], []];

let outputs = [14, undefined, undefined, 28, undefined];

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if (
    input.length !== 2 ||
    input.some(elem => {
      return typeof elem !== "number";
    })
  ) {
    return undefined;
  }
  return input[0] * input[1];
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
console.log("All tests passed for " + __filename);
