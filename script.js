console.log("Hello world");


// ARRAY DESTRUCTURING IN ES6 -----------------------------------------------
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1, 2, 3, 4, 5, 6];

// let a = alphabet[0];
// let b = alphabet[1];

const [a, b] = alphabet
// Print: A
// Print: B

// 2nd element will be skipped. Spread operator variable restOfLetters will print
const [c, , e, ...restOfLetters] = alphabet; // A, C, D, E, F

// console.log(a); // A
// console.log(b); // B
// console.log(c); // A
// console.log(e); // C
// console.log(restOfLetters); // D, E, F


// Combine two arrays using spread operator
const newArray = [...alphabet, ...numbers];
console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b]
};

const array = sumAndMultiply(2, 3);

// Destructured
const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);  // default is division

console.log(array);
console.log('Sum is ' + sum);
console.log('Multiply is ' + multiply);
console.log(division);


// OBJECT DESTRUCTURING IN ES6 ---------------------------------------------------
const personOne = {
    name: 'Nina',
    age: 25,
    address: {
        city: 'Anaheim',
        state: 'CA'
    }
};

const personTwo = {
    name: 'Savon',
    age: 26,
    address: {
        city: 'Saint Paul',
        state: 'MN'
    }
};

// Get age and name from personTwo using object destructuring
// const { name, age } = personTwo;
// console.log(name);
// console.log(age);

// Changing 'name' to 'firstName', 'pizza' is default for 'favoriteFood' if 'favoriteFood' key doesn't exist
// const { name: firstName, age, favoriteFood = "pizza" } = personTwo;
// console.log(firstName);
// console.log(age);
// console.log(favoriteFood);

// Spread operator to get the rest inside object
const { name: firstName, ...rest } = personTwo;
console.log(firstName);
console.log(rest);


const personThree = {
    name: 'David',
    age: 21,
    address: {
        city: 'Saint Paul',
        state: 'MN'
    }
};

// Passing destructured object to function parameter w/favoriteFood default set to 'watermelon'
function printUser({ name, age, favoriteFood = "watermelon" }) {
    console.log(`${name} is cool. He is ${age} years old and he loves ${favoriteFood}!`);
}

// Pass personThree to printUser() above
printUser(personThree);