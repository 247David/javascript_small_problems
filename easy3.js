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

//3. Stringy Strings - Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.


