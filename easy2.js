// 1. Welcome Stranger - Create a function that takes 2 arguments, an array and an object. 
// The array will contain 2 or more elements that, when combined with adjoining spaces, will produce 
// a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. 
// Your function should return a greeting that uses the person's full name, and mentions the person's title.
//Example:
// console.log(
//     greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
//   );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

//   function greetings(nameArray, jobObject) {
//     return 'Hello, '+ nameArray.join(' ') + '! ' + 'Nice to have ' + jobObject.title + ' ' + jobObject.occupation +' around.';
//   }

//   console.log(
//     greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
//   );

  //2. Greeting a user - Write a program that will ask for user's name. The program will then greet the user. 
  //If the user writes "name!" then the computer yells back to the user.
//   function userGreeting(){
//     let prompt = require('readline-sync');
//     let promptInput = prompt.question('What is your name?');
//     let scream = false;
//     for (char in promptInput) {
//         if (promptInput[char] === '!') {
//         scream = true;
//         }
//     }
//     if(scream){
//     console.log(`Hello ${promptInput} why are you screaming?`.toUpperCase());
//     } else{
//         console.log(`Hello ${promptInput}`);
//     }
//   }

//   userGreeting();

//3. Multiplying Two Numbers - Create a function that takes two arguments, multiplies them together, and 
//returns the result.
// Example:
// console.log(multiply(5, 3) === 15); // logs true

// let multiply = (a,b) => a * b ;

// console.log(multiply(5, 3) === 15);

//4. Squaring an Argument - Using the multiply() function from the "Multiplying Two Numbers" problem, write 
//a function that computes the square of its argument (the square is the result of multiplying a number by 
//itself).
// Example:
// console.log(square(5) === 25); // logs true

// let square = (a) => a * a ;
// //Test:
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

//5. Arithmetic Integer - Write a program that prompts the user for two positive integers, and then prints 
//the results of the following operations on those two numbers: addition, subtraction, product, quotient, 
//remainder, and power. Do not worry about validating the input.

// let prompt = require ('readline-sync');
// let firstNumber = Number(prompt.question('==> Enter the first number:'));
// let secondNumber = Number(prompt.question('==> Enter the second number:'));
// console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`==> ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
// console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(`==> ${firstNumber} ** ${secondNumber} = BigInt(${firstNumber ** secondNumber})`);


//5. The End Is Near But Not Here - Write a function that returns the next to last word in the String 
//passed to it as an argument.
//Words are any sequence of non-blank characters.
//You may assume that the input String will always contain at least two words.
//Examples:
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function penultimate(inputString) {
//   let joinedString = inputString.split(' ');

//   return joinedString[joinedString.length - 2];
// }

// console.log(penultimate("last word") === "last");
// console.log(penultimate("Launch School is great!") === "is");

//6. Exclusive Or - The || operator returns a truthy value if either or both of its operands are truthy, 
// a falsey value if both operands are falsey. The && operator returns a truthy value if both of its 
// operands are truthy, and a falsey value if either operand is falsey. This works great until you need 
//only one, but not both, of two conditions to be truthy: the so-called exclusive or.

//In this exercise, you will write a function named xor that takes two arguments, and returns true if 
//exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result 
//instead of a truthy/falsy value as returned by || and &&.

// function xor (a,b) {
//   return (a ^ b) ? true : false ;
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

//7. Odd Lists - Write a function that returns an Array that contains every other element of an Array that is 
//passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 
//5th, and so on elements of the argument Array.
// Examples:
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]

// function oddities(inputArray) {
//   return inputArray.filter((number,index,array) => {
//     return index % 2 === 0;
//   });
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

//8. How Old is Teddy? - Build a program that randomly generates Teddy's age, and logs it to the console. 
//Have the age be a random number between 20 and 120 (inclusive).

// Example Output:
// Teddy is 69 years old!

// console.log(`Teddy is ${Math.floor(Math.random() * 120) + 20} years old!`);

//9. When Will I Retire? - Build a program that logs when the user will retire and how many more years the 
//user has to work until retirement.
// Example:
// Copy Code
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!