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
let inputs = [
  "It sucks when it rains",
  "Dont go breaking my heart",
  "",
  ["You better kiss the girl", 1993],
  2019
];

let outputs = ["rains", "breaking", "", undefined, undefined];

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  if (typeof str !== "string") {
    return undefined;
  }

  if (str === "") {
    return "";
  }

  let substr = str.split(" ");

  let longeststr = substr[0];

  for (i = 0; i < substr.length; i++) {
    if (substr[i].length >= longeststr.length) {
      longeststr = substr[i];
    }
  }

  return longeststr;
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
