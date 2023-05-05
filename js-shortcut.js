const money = 150;
// let food;
// // if (money > 100) {
// //     food = 'Biriyani';
// // } else {
// //     food = 'alur vorta';
// // }
//ternary
let food = money > 100 ? 'Biriyani' : 'Alur vorta';
// console.log(food);

let active = true;
//function call shortcut alternative
// active ? displayUser() : hideUser();

// //
// active && displayUser();
// active || hideUser();

const x = active && 5;
// console.log(x);


//string to number
const number = +'45';
// console.log(number);

//number to string
const numText = 45 + '';
// console.log(numText);

function add(num, num2 = 5) {
    return num + num2;
}

const result1 = add(45);
const result2 = add(45, 10);
console.log(result1, result2);