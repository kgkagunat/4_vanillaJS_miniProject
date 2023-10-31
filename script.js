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

// Replace 'Test' with 'Awesome. Make every other letter upper case. Join two words back to one. Using `for...of`
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

//=====================================================================

// Day 2 of practice

// Reverse string again day 2
const d2String = 'United States';

let d2InitString = '';

for (i = d2String.length - 1; i >= 0; i--) {
    d2InitString += d2String[i];
}
const d2FinalString = d2InitString;
console.log(d2FinalString);

// Every other odd letter capitalized day 2
const d2String1 = 'guantanamo';

let d2String1Init = '';

for (i = 0; i < d2String1.length; i++) {
    if (i % 2 !== 0) {
        d2String1Init += d2String1[i].toUpperCase();
    } else {
        d2String1Init += d2String1[i].toLowerCase();
    }
}
const d2String1Final = d2String1Init;
console.log(d2String1Final);

// Ever other letter capitalized with multiple words day 2. Using .forEach()
const d2String2 = 'People, Places, Things!';
const d2String2split = d2String2.split(' ');

const d2String2arr = [];

d2String2split.forEach((words) => {
    let d2ModifiedWord = '';
    for (i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            d2ModifiedWord += words[i].toUpperCase();
        } else {
            d2ModifiedWord += words[i].toLowerCase();
        }
    }
    // console.log(d2ModifiedWord)
    d2String2arr.push(d2ModifiedWord);
});
// console.log(d2String2arr)
const d2String2Final = d2String2arr.join(' ');
console.log(d2String2Final, typeof d2String2Final);

// Every other 3 words contain "modified". All other words are left alone.
const d2stringArray = [
    'Japan',
    'Hawaii',
    'California',
    'Korea',
    'England',
    'Spain',
];

const d2string3arr = [];

d2stringArray.forEach((word, index) => {
    if (index % 3 === 2) {
        const modWord = `${word} - modified`;
        d2string3arr.push(modWord);
    } else {
        const lowerWord = word.toLowerCase();
        d2string3arr.push(lowerWord);
    }
});
console.log(d2string3arr);
