// 1. ddaaiillyy ddoouubbllee - Write a function that takes a string argument and returns a new string that 
// contains the value of the original string with all consecutive duplicate characters collapsed into a 
// single character.
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

    // let crunch = function(inputString){
    //     if(typeof inputString !== 'string'){
    //         console.log('Invalid input');
    //         return;
    //     }else{
    //         let inputStringArray = inputString.split(' ');
            
    //         return inputStringArray.map(function(element,index){
    //             let uniqueElement = '';
    //             for(let char in element){
    //                 if(uniqueElement.includes(element[char])){
    //                     uniqueElement += '';
    //                 }else{
    //                     uniqueElement += element[char];
    //                 }
    //             }return uniqueElement;
    //         }).join(' ');
    //     }
    // };

    // console.log(crunch('ddaaiillyy ddoouubbllee'));
    // console.log(crunch('4444abcabccba'));              // "4abcabcba"
    // console.log(crunch('ggggggggggggggg'));            // "g"
    // console.log(crunch('a'));                          // "a"
    // console.log(crunch(''));                           // ""

//2. Bannerizer - Write a function that will take a short line of text, and write it to the console log within a box.
//Example:
// logInBox('To boldly go where no one has gone before.');
// output:
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// let logInBox = function (inputText) {
//     let topBorder1 = '+-'+ '-'.repeat(inputText.length) +'-+';
//     let topBorder2 = '| '+ ' '.repeat(inputText.length) +' |';
//     let bottomBorder1 = '| '+ ' '.repeat(inputText.length) +' |';
//     let bottomBorder2 = '+-' + '-'.repeat(inputText.length) + '-+';
//     return topBorder1 + '\n' + topBorder2 + '\n' + '| ' + inputText +' |' + '\n' + bottomBorder1 + '\n' + bottomBorder2;
// };

//  console.log(logInBox(''));
//  console.log(logInBox('To boldly go where no one has gone before.'));

//3. Stringy Strings - Write a function that takes one argument, a positive integer, and returns a string 
//of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given 
//integer
//output: 
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// let stringy = function (positiveInt){
//    let altString = '';
//    let count = 0;
//     while(count < positiveInt) {
//         if(count % 2 === 0){
//             altString += 1;
            
//         }else {
//             altString += 0;
//         } count +=1;
//     }
//     return altString;
// };

// console.log(stringy(9));

//4. Right Triangles - Write a function that takes a positive integer, n, as an argument and logs a right 
//triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below)
// should have one end at the lower-left of the triangle, and the other end at the upper-right.
// Examples:
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// let triangle = function(triangleSize){
//     for(let row = 1; row <= triangleSize; row++) {
//         for (let column = row; column <= triangleSize; column++){
//             process.stdout.write(' ');
//         }
//         for (let column = 1; column <= row; column++){
//             process.stdout.write('*');
//         }
//         process.stdout.write('\n');
//     }
// };

// triangle(9);

//5. Madlibs - Madlibs is a simple game where you create a story template with "blanks" for words. 
//You, or another player, then construct a list of words and place them into the story, creating an
// often silly or funny story as a result

// let madLibs = function (){
//     let inputString = require('readline-sync');
//     let noun = inputString.question('Enter a noun: ');
//     let verb = inputString.question('Enter a verb: ');
//     let adjective = inputString.question('Enter an adjective: ');
//     let adverb = inputString.question('Enter an adverb: ');


//     console.log(`The ${adjective + ' '+ noun +' '+ verb} ${adverb}`);
// };

// madLibs();

// 6. Double Doubles - A double number is an even-length number whose left-side digits are exactly the same 
//as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, 
//whereas 444, 334433, and 107 are not.
// Write a function that returns the number provided as an argument multiplied by two, unless the argument 
//is a double number; otherwise, return the double number as-is.
// Examples:
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214


// let twice = function (doubleInput){
//     if (doubleInput.substring(0,doubleInput.)){

//     }
// }