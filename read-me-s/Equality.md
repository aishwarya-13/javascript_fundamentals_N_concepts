## Equality (==)

-> The equality (==) operator checks whether its two operands are equal, returning a Boolean result. 
-> Unlike the strict equality operator(===), it attempts to convert and compare operands that are of different types.

1. If operands have "same type", they are compared as follows

-> Object: return true only if both operands reference the same object.

-> String: return true only if both operands have the same characters in the same order.

-> Number: return true only if both operands have the same value.
+0 and -0 are treated as the same value.
If either operand is NaN, return false; so NaN is never equal to NaN.

-> Boolean: return true only if both operands are both true or both false.

-> BigInt: return true only if both operands have same value.

-> Symbol: return true only if both operands reference the same symbol.

2. If one of the operands is "null" or "undefined", the other must also be "null" or "undefined" to return true. Otherwise return false.

3. If one of the operands is an object and other is a primitive, convert the object to a primitive.

4. If both the operands are converted to primitives, the rest of the conversion is done case-by-case.

-> If they are of same type, compare using step 1.
-> If one of the operands is a Symbol but other is not, return false.
-> If one of the operands is a Boolean but other is not, convert the boolean to a number (true -> 1 and false -> 0)
-> Number to string: convert string to number. COnversion failure results in NaN, which will guarantee the equality to false.
-> Number to BigInt: compare by theire numeric value. If number is +-Infinity or NaN, return false.
-> String to BigInt: convert string to BigInt. If conversion fails return false.


## Inequality operator (!=)

The inequality operator is negation the (==) operator. Following two lines always give same result

x != y
!(x == y)

So apply (==) rules get the result and negate it