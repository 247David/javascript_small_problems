// 1. ddaaiillyy ddoouubbllee - Write a function that takes a string argument and returns a new string that 
// contains the value of the original string with all consecutive duplicate characters collapsed into a 
// single character.
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

let crunch = function (inputString) {
    if (typeof inputString !== 'string') {
        console.log('Invalid input');
        return;
    }else{
        let inputArray = inputString.split('');
        let inputSet = new Set(inputArray);
        return Array.from(inputSet).join('');

    }
};

console.log(crunch(9));
