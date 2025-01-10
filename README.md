# Unexpected String Concatenation in JavaScript
This repository demonstrates an uncommon JavaScript bug related to unexpected string concatenation when using the + operator.  The issue arises when one of the operands is a string, causing the operator to concatenate instead of performing numerical addition.

## Bug Description
The primary problem lies in the implicit type coercion of the + operator in JavaScript. When one operand is a string and the other is a number, the number is converted to a string, and string concatenation occurs.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js`. Observe the unexpected output. 

## Solution
The `bugSolution.js` file provides a corrected version of the function using explicit type checking or the Number() function to ensure numerical addition.

## Lessons Learned
This example highlights the importance of careful type handling in JavaScript. Always be mindful of implicit type coercion and consider using explicit type conversions or stricter type checking to avoid unexpected behavior.