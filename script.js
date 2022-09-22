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



// HACKERRANK 'Plus Minus' problem -------------------------------------------------------------------------------------------------
/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.
*/

// 1. Count length of array and loop through array
// 2. Count numbers that are positive: greater than zero
// 3. Count numbers that are negative: less than zero
// 4. Count numbers that are zero
// 5. Divide numbers by length
// 6. Print out ratios for each

function plusMinus(arr) {
    let n = arr.length;
    // store positive, negative, and zero counts in variable
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        }
        else if (arr[i] < 0) {
            negative++
        }
        else {
            zero++
        }
    }

    let positiveRatio = positive / n;
    let negativeRatio = negative / n;
    let zeroRatio = zero / n;

    console.log(positiveRatio.toFixed(6) + "\n" + negativeRatio.toFixed(6) + "\n" + zeroRatio.toFixed(6));
};

let arrayRatios = plusMinus([1, -2, 3, 4, 0]);
// console.log(arrayRatios);


/*
Problem 2: 
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    Example: arr = [1, 3, 5, 7, 9]

    The minimum sum is 1 + 3 + 5 + 7 = 16  and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints: 16 24 
*/

function minMax(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    // Loop through array to find max and min
    for (let i = 0; i < 5; i++) {
        // if max is < the next number in array, set max to that next number
        if (max < arr[i]) { // max is 1, 1 < 2 so max = 2
            max = arr[i];
            console.log('max is: ' + max);
        }

        // if min is > the next number in array, set min to that next number 
        if (min > arr[i]) { // min is 1, 1 is not greater than 2 so min stays 1
            min = arr[i];
            console.log('min is: ' + min);
        }
        sum += arr[i]
    }

    console.log('sum is: ' + sum);  // 15
    console.log('min is: ' + min);  // 1
    console.log('max is: ' + max);  // 5
    // Subtract sum by min to get maxSum (15 - 1 = 14)
    let maxSum = sum - min;
    // Subtract sum by max to get minSum (15 - 5 = 10)
    let minSum = sum - max;
    console.log(minSum + " " + maxSum);
}

let minMaxSum = minMax([1, 2, 3, 4, 5])

/*
PROBLEM 3. Time Conversion

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
- s = '12:01:00PM'

Return '12:01:00'.

- s = '12:01:00AM
Return '00:01:00'.
*/

// 3 cases
// 1. 12AM --> 00
// 2. 1AM to 12PM --> stays the same, do nothing
// 3. 1PM to 11PM --> add 12 to origin hour
// 9 indices, 'AM' 'PM' starts at index 8

function timeConversion(s) {
    // Set 'AM' or 'PM' to variable at index 8
    let amPm = s.charAt(8);
    // Set military hour to variable to hold time, minutes and seconds are the same
    let militaryHour = "";

    // check if amPm equals 'A' and if first two characters equal 12
    // if first two index equals '1' and '2' ('12'), set militaryHour to '00'
    if (amPm == "A") {
        if (s.substring(0, 2) == "12") {
            militaryHour = "00";
        }
        // else military time stays the same (s.substring(0,2))
        else {
            militaryHour = s.substring(0, 2);
        }
    }
    // since amPm does not equal 'A'
    else {
        if (s.substring(0, 2) == "12") {

        } else {
            // add 12 to subString and parseInt to convert string to integer
            // 10 indicates base 10
            militaryHour = parseInt(s.substring(0, 2), 10) + 12;
        }
    }
    // return militaryHour plus the rest of the string indices without the 'AM' 'PM' part
    return militaryHour + s.substring(2, 8);
}

console.log(timeConversion('07:05:45PM'));


/*
PROBLEM 4. Find the median of an array
*/

function findMedian(arr) {
    // sort array 
    arr.sort(function (a, b) {
        return a - b
    });

    // divide array length by 2
    let half = Math.floor(arr.length / 2);
    // console.log('half is: ' + half);
    if (arr.length % 2) {
        return arr[half]
    }
    else {
        return (arr[half - 1] + arr[half]) / 2.0;
    }
}

let medianTest = findMedian([1, 5, 6, 2, 7]);
// sorted 1, 2, 5, 6, 7
// Print: 5
console.log(medianTest);