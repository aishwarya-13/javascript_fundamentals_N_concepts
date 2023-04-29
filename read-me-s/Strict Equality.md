## Strict Equality (===)

Unlike (==) operator (===) operator does not attempt type conversion.
Instead, (===) operator always considers operands of different types to be different.
The strict equality operator essentially carries out only step 1(see Equality.md), and then returns false for all other cases.

1. If the operands are of different types, return false.
2. If both operands are objects, return true only if they refer to the same object.
3. If both operands are null or both operands are undefined, return true.
4. If either operand is NaN, return false.
5. Otherwise, compare the two operand's values:
    a. Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
    b. Strings must have the same characters in the same order.
    c. Booleans must be both true or both false.

## Strict Inequality (!==)

It is the negation of the strict equality operator so the following two lines will always give the same result:

x !== y;

!(x === y);