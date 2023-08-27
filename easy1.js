//1 . Isn't it Odd? -  Write a function that takes one integer argument, which may be positive, negative, or 
//zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a 
//valid integer value.


// let isOdd = function (inputInt) {
//     return Math.abs(inputInt) % 2 === 1;
// };

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

//2. Odd Numbers - Log all odd numbers from 1 to 99, inclusive, to the console, with each number 
//on a separate line.
// let n  = 0;
// while (n < 100) {
//     if (n % 2 === 1) {
//         console.log(n);
//     }
//     n +=1;
// }

//3. Even Numbers - Log all even numbers from 1 to 99, inclusive, to the console, with each number 
//on a separate line.

// let numbers = 1;

// while (numbers < 100) {
//     if (numbers % 2 === 0){
//         console.log(numbers);
//     }numbers += 1;
// }

//4. How big is the room? - Build a program that asks the user to enter the length and width of a room in 
//meters, and then logs the area of the room to the console in both square meters and square feet.
// Note: 1 square meter == 10.7639 square feet
// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect 
//user input.

// const input = require('readline-sync');

// let length = input.question('Room length in meters: ');
// let width = input.question('Room width in meters: ');

// console.log(((Number(length) * 10.7639)) + ((Number(width)) * 10.7639) + 'square feet');


//5. Tip Calculator - Create a simple tip calculator. The program should prompt for a bill 
// amount and a tip rate. The program must compute the tip, and then log both the tip and 
// the total amount of the bill to the console. You can ignore input validation and assume
// that the user will enter numbers.

const input = require('readline-sync');

let billAmount = Number(input.question('Enter bill amount:'));

let tipRate = Number(input.question('Enter tip rate(%):'));

let totalAmount = billAmount + (billAmount * (tipRate/100));

console.log(`Tip is: ${billAmount * (tipRate/100)} and the total bill is: ${totalAmount} `);