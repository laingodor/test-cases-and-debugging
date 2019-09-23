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
// we need 7 test cases.
let inputs = [
  ["love", 4],
  ["sunshine", -2],
  ["world", 2, 3],
  ["bees", 5],
  [2, "be"],
  ["pure", 3],
  []
];

let outputs = [
  "lovelovelovelove",
  "",
  undefined,
  "beesbeesbeesbeesbees",
  undefined,
  "purepurepure",
  undefined
];

/*
The function input is an array as input. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
  let word = arr[0];
  let count = arr[1];

  if (
    arr.length !== 2 ||
    typeof word !== "string" ||
    typeof count !== "number"
  ) {
    return undefined;
  }

  if (count > 0) {
    return word.repeat([count]);
  }

  {
    return "";
  }
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
runTest(6);
console.log("All tests passed for " + __filename);
