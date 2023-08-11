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

let numbers = 1;

while (numbers < 100) {
    if (numbers % 2 === 0){
        console.log(numbers);
    }numbers += 1;
}