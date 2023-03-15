// Normal way to find fibonacci 
// var fibonacci = [];
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// // for (let i = 1; i <= 10; i++)
// for (let i = 2; i <= 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     // var newElement = fibonacci[i - 1] + fibonacci[i]
//     // fibonacci.push(newElement);
// }
//using Function
// function fibonacciN(n) {
//     var fibonacci = [];
//     fibonacci[0] = 0;
//     fibonacci[1] = 1;
//     // for (let i = 1; i <= 10; i++)
//     for (let i = 2; i <= n; i++) {
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//         // var newElement = fibonacci[i - 1] + fibonacci[i]
//         // fibonacci.push(newElement);
//     }

//     return fibonacci;
// }
// console.log(fibonacciN(10));
// Using Recursive Way to find fibonacci

function fibonacciRecursive(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];

    } else {
        var fibonacci = fibonacciRecursive(n - 1);
        var newElement = fibonacci[n - 1] + fibonacci[n - 2];
        fibonacci.push(newElement);
        return fibonacci;
    }
}

var result = fibonacciRecursive(10);
console.log(result);