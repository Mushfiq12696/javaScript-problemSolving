const numbers = [12, 15, 34, 54];
const [x, y] = numbers;
// console.log(x, y);

function bxify(num1) {
    return [num1, num1 + 5];
}
const [box1, box2] = bxify(8);
// console.log(box1, box2)

//object destructuring
const person = { name: 'Proma', age: 25, id: 1, salary: 25000 };
const { name, age } = person;
// console.log(name, age);
const newNumbers = [...numbers, 90];
console.log(newNumbers);