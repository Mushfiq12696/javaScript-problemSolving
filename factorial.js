// function findFactorialFor(number) {
//     var result = 1;
//     for (var i = 1; i <= number; i++) {
//         result = i * result;
//     }
//     return result;
// }
// var number = 4;
// var factorialResult = findFactorialFor(number);
// console.log(factorialResult);

// function findFactorialWhile(number) {
//     var factorial = 1;
//     var i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// var number = 5;
// var factorialResult = findFactorialWhile(number);
// console.log(factorialResult);
function findFactorialRecusive(number) {
    if (number == 0) {
        return 1;
    } else {
        return number * findFactorialRecusive(number - 1);
    }
}
var factorial = findFactorialRecusive(5);
console.log(factorial);