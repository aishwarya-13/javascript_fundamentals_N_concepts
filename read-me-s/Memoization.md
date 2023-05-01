# Memoization

-> Programs often waste time calling functions which recalculate the same results over and over again. This is particularly true with recursive and mathematical functions.
-> Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.
-> Because JavaScript objects behave like associative arrays, they are ideal candidates to act as caches.
-> Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. 
-> However, if the data is not cached, then the function is executed, and the result is added to the cache.

-> A perfect example of this is the Fibonacci number generator using recusrion
-> This function performs well for small values of “n”. However, performance quickly degrades as “n” increases.
This is because the two recursive calls repeat the same work.
-> For example, to compute the 50th Fibonacci number, the recursive function must be called over 40 billion times (40,730,022,147 times to be specific)! 
-> This problem of repeating work could be mitigated if the function remembered what it had previously computed.