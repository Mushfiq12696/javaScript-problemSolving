const products = [{ name: 'Laptop', price: 500 },
    { name: 'Phone', price: 100 },
    { name: 'watch', price: 50 },
    { name: 'Tablet', price: 300 }
];
const product_names = products.map(p => p.name);
// console.log(product_names);
//forEach
// products.forEach(pd => console.log(pd.price));
//filter
const cheaperProducts = products.filter(pd => pd.price < 300);
// console.log(cheaperProducts);
//remove an item using filter
const remaining = products.filter(pd => pd.price != 50);
// console.log(remaining);


//find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);