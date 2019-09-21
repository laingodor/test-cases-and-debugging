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
// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["chocolate", 6],
  ["string", 8],
  [189, 2],
  ["falcon", 4],
  ["purpose", 6],
  ["trust", 4]
];

let outputs = ["o", undefined, "a", undefined, undefined, "o", "e", "t"];

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  let word = arr[0];
  let index = arr[1];
  if (word.length < index + 1 || typeof word !== "string") {
    return undefined;
  }
  return word[index];
}

function runTest(i) {
  let expected = outputs[i];
  let input = inputs[i];
  let actual = f(input);
  console.log(expected, actual);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("All tests passed for " + __filename);
