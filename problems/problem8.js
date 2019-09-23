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
  "I love you",
  "The sun is shining",
  "Forever",
  "Bullet",
  "Gelato is life"
];

let outputs = [
  "uoy evol I",
  "gninihs si nus ehT",
  "reveroF",
  "telluB",
  "efil si otaleG"
];

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use at least one for loop for this exercise.

HINTS: 
 - Create an empty array
 - Add each character of the string to that empty array (use the array method push). You'll need to use a for loop
 - Create another empty array
 - Add each character of the string to new empty array in reverse order
 - Convert that array back to a string (use the join array method)
 
*/
function f(str) {
  let empstr1 = [];

  for (i = 0; i < str.length; i++) {
    empstr1.push(str[i]);
  }

  empstr1.reverse();

  let empstr2 = empstr1.join("");

  return empstr2;
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
