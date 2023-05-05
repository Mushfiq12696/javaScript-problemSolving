const person = {
    name: 'Battery',
    power: 5
}

const data = (JSON.stringify(person));

const dataParsed = JSON.parse(data);
console.log(dataParsed);