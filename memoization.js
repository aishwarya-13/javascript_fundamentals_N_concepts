/**
 * When using regular recursive function when n=50, the function goes into Time limit exceeded.
 * But when using a memoized function, it gives the result for n=50;
 * the original recursive function was called over 40 billion times to compute the 50th Fibonacci number. 
 * By implementing memoization, this number drops to 99.
 */

const fibonacciNumber = (function(){
    const memo = {};
    function fib(n){
        let value;
        if(n in memo){
            return memo[n];
        }else{
            if(n<2){
                value = n;
            }else{
                value = fib(n-2) + fib(n-1);
            }
            memo[n] = value;
        }
        return value;
    }
    return fib;
})();



// function fibonacciNumber(n){
//     if(n<2){
//         return n;
//     }else{
//         return fibonacciNumber(n-2) + fibonacciNumber(n-1);
//     }
// }

console.log(fibonacciNumber(50));