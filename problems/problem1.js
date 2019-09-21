let eq = (lhs, rhs) => {
    if (Array.isArray(lhs)) {
        for (let i = 0; i < lhs.length; i++) {
            if (lhs[i] !== rhs[i]) return false
        }
        return true
    }
    return lhs === rhs
}

let verifyEquals = (lhs, rhs) => {
    if (!eq(lhs, rhs)) throw new Error("The expected output doesn't match the actual output")
}

// We need 5 test cases. I provided 1 input
let inputs = [
    'abc', '', 'cocoa', '2000', 'hurts'
]

let outputs = [
    'a', undefined, 'c', '2', 'h'
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
    if (str.charAt(0) === '') return undefined;
    return str.charAt(0);
}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual) 
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)
