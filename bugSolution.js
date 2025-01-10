function foo(a, b) {
  //Check if both parameters are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Error: Both parameters must be numbers";
  }
}
console.log(foo(2, 3)); // Expected output: 5
console.log(foo(2, "3")); // Expected output: Error: Both parameters must be numbers