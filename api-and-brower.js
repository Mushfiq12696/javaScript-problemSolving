const person = {
    name: 'Battery',
    power: 5
}

const data = (JSON.stringify(person));

const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);


//local Storage

// localStorage.setItem('useId', 1245);
// console.log(localStorage.getItem(userId));
const useId = localStorage.getItem('useId');
// console.log(useId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
// console.log(parsedPerson.power);

const keys = Object.keys(parsedPerson);
console.log(keys);
const values = Object.values(parsedPerson);
console.log(values);