// Day 1 of practice

// Template literals
const age = 30;
const firstName = 'John';
const lastName = 'Doe';
console.log(`Hello my name is ${firstName} ${lastName}. I am ${age} years old`);

// Methods / Properties
const string = 'Hello World!';

let result;

result = string;
result = string[0];

// Upper / lower case
result = string.toUpperCase();
result = string.toLowerCase();

// charAt() - return char at specified index
result = string.charAt(9);

// indexOf() - return index of 1st occurrence of specified value in string
result = string.indexOf('!');
result = string.indexOf('W');

// substring(indexStart, indexEnd) - search string at specified index
// indexStart = inclusive, indexEnd = exclusive
result = string.substring(2);
result = string.substring(0, 8);

// slice(indexStart, indexEnd) - slice part of string, return new string
// indexStart = inclusive, indexEnd = exclusive
result = string.slice(1, 5);
result = string.slice(-6, -1);

// trim() - remove whitespace
result = '        Hello World!        ';
result = result.trim();

// replace(searchString, position) - replace all instances of string
result = string.replace('Hello', 'Awesome');

// includes() - returns true if string found
result = string.includes('Wor');

// valueOf() - returns primitive value
result = string.valueOf();

// split() - return array of strings
result = string.split();
result = string.split('');
result = string.split(' ');
result = string.split('H');
result = string.split('!');
result = 'People, Places, Things';
result = result.split(',');

// join() - return new string by concat array elements
result = ['The', 'Planet'];
result = result.join(' ');

console.log(result);

/* ------------------------------------ */

// Make 1st letter upper case
const stringV1 = 'tester';
const resultString = stringV1[0].toUpperCase() + stringV1.substring(1);

console.log(resultString);

// Make every odd letter upper case
const stringV2 = 'awesome';
// console.log(stringV2.length);

let arrString = '';

for (i = 0; i < stringV2.length; i++) {
    if (i % 2 !== 0) {
        arrString += stringV2[i].toUpperCase();
        // console.log(arrString);
    } else {
        arrString += stringV2[i].toLowerCase();
        // console.log(arrString);
    }
}

console.log(arrString);

// Replace 'Test' with 'Awesome. Make every other letter upper case. Join two words back to one.
const stringV3 = 'Test World';
const newStringV3 = stringV3.replace('Test', 'Awesome');

const arrWord = newStringV3.split(' ');

const resultWord = [];

for (const words of arrWord) {
    // console.log(words)
    let modifiedWords = '';
    for (i = 0; i < words.length; i++) {
        // console.log(words)
        if (i % 2 === 0) {
            modifiedWords += words[i].toUpperCase();
            // console.log(modifiedWords);
        } else {
            modifiedWords += words[i].toLowerCase();
            // console.log(modifiedWords);
        }
    }

    resultWord.push(modifiedWords);
}

// console.log(resultWord, typeof resultWord);

const finalWord = resultWord.join(' ');
console.log(finalWord, typeof finalWord);

// Reverse a string
const stringV4 = 'Tabletop!!!, Madness';

let reversedString = '';

for (i = stringV4.length - 1; i >= 0; i--) {
    reversedString += stringV4[i];
    // console.log(reversedString);
}

const reversedFinalString = reversedString;
console.log(reversedFinalString);
