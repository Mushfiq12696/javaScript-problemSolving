// without temp variable swap
// var a = 6;
// var b = 7;
// a = a + b;
// b = a - b;
// a = a - b;

// console.log('a =',
//     a, ',',
//     'b = ',
//     b);

// with temp

// var a = 5;
// var b = 7;

// var temp;

// temp = a;
// a = b;
// b = temp;
// console.log('a =',
//     a, ',',
//     'b = ',
//     b);
// using array
var a = 5;
var b = 7;

[a, b] = [b, a];

console.log('a =',
    a, ',',
    'b = ',
    b);