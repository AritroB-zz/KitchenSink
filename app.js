let firstName = "Aritro";
const States = 50;
sum = 5 + 4;

// Function to check first character of a string
function nameCheck(name) {
    if (name.charAt(0) == 'L') {
        alert('Back of the line!');
    } else {
        alert('Next!');
    }
}

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeggies = ['green beans', 'okra', 'corn', 'zucchini'];

for (let index = 0; index < favVeggies.length; index++) {
    console.log(favVeggies[index]);
}

let people = [
    {
        name: 'John',
        age: 32
    },
    {
        name: 'Susan',
        age: 18
    },
    {
        name: 'Marques',
        age: 29
    },
    {
        name: 'Linus',
        age: '16'
    }
];

people.map(person => {
    checkAge(person.name, person.age);
});

function getLength(word) {
    return word.length;
}

let helloLength = getLength('Hello World');

console.log(helloLength % 2 ? 'The world is an odd place!' : 'The world is nice and even!');

if (helloLength & 1) {
    console.log('The world is an odd place!');
} else {
    console.log('The world is nice and even!');
}