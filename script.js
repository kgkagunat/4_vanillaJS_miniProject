// Day 1 of practice

// Template literals
const age = 30;
const firstName = 'John';
const lastName = 'Doe';
console.log(`Hello my name is ${firstName} ${lastName}. I am ${age} years old`);

//=====================================================================
console.log('--String Methods--');

//* STRING METHODS

// 1) .at(index) - Returns character at `specified index`. Based on UTF-16 code units. `Can use` negative numbers. Returns `undefined` if index is out of range.
const strAt = 'Hello World';
console.log(strAt.at(4));
console.log(strAt.at(-1));

// 2 ) .charAt(index) - Returns character at `specified index`. Based on UTF-16 code units. `Can't use` negative numbers. Returns `empty string` if index is out of range.
const strCharAt = 'Hello World';
console.log(strCharAt.charAt(4));
console.log(strCharAt.charAt(-1));

// 3) .charCodeAt(index) - Returns UTF-16 code unit at `specified index`. Returns `NaN` if index is out of range.
const strCharCodeAt = 'Hello World';
console.log(strCharCodeAt.charCodeAt(4));
console.log(strCharCodeAt.charCodeAt(-1));

// 4) .concat(str1, str2, ...) - Combines strings. Returns new string.
const strConcat = 'Hello ';
const strConcatResult = strConcat.concat('World', '!');
console.log(strConcatResult);

// 5) .endWith(searchString, endPosition) - Checks if string ends with `searchString`. Returns `boolean`.
const strEndWith = 'Awesome Sauce';
const strEndWithResult = strEndWith.endsWith('Sauce');
console.log(strEndWithResult);

// 6) .includes(searchString, position) - Checks if string contains `searchString`. Returns `boolean`.
const strIncludes = 'Awesome Sauce';
if (strIncludes.includes('Sauce')) {
    console.log('It does include Sauce');
} else {
    console.log('It does not include Sauce');
}

// 7) .indexOf(searchString, position) - Returns the index of `first` occurrence of `searchString`. Returns `-1` if not found.
const strIndexOf = 'The World is Awesome';
console.log(strIndexOf.indexOf('World'));
console.log(strIndexOf.indexOf('e'));

// 8) .lastIndexOf(searchString, position) - Returns the index of `last` occurrence of `searchString`. Returns `-1` if not found.
const strLastIndexOf = 'The World is Awesome';
console.log(strLastIndexOf.lastIndexOf('e'));
console.log(strLastIndexOf.lastIndexOf('i'));

// 9) .match(regexp) - Returns an array of results matching `regexp`. Returns `null` if not found.
const strMatch = 'The World is Awesome';
console.log(strMatch.match(/is/g));

// 10) .padEnd(targetLength, padString) - Pads the end of the string with `padString` until it reaches `targetLength`. Returns `new` string. targetLength = string.length + padEnd(length)
const strPadEnd = 'Peace';
const strPadEndResult = strPadEnd.padEnd(10, '!');
console.log(strPadEndResult);

// 11) .padStart(targetLength, padString) - Pads the start of the string with `padString` until it reaches `targetLength`. Returns `new` string. targetLength = string.length + padStart(length)
const strPadStart = 'Peace';
const strPadStartResult = strPadStart.padStart(10, '!');
console.log(strPadStartResult);

// 12) .repeat(count) - Returns a new string containing `count` copies of the string. Returns `empty string` if count is 0.
const strRepeat = 'Test';
const strRepeatResult = strRepeat.repeat(3);
console.log(strRepeatResult);

// 13) .replace(pattern, replacement) - replaces pattern with replacement on `first` occurrence. Returns `new` string.
const strReplace = 'This Word Word Cool';
const strReplaceResult = strReplace.replace('Word', 'is');
console.log(strReplaceResult);

// 14) .replaceAll(pattern, replacement) - replaces pattern with replacement on `all` occurrences. Returns `new` string.
const strReplaceAll = 'This Word Word Cool';
const strReplaceAllResult = strReplaceAll.replaceAll('Word', 'is');
console.log(strReplaceAllResult);

// 15) .search(regexp) - Returns the index of the `first` occurrence of `regexp`. Returns `-1` if not found.
const strSearch = 'This is a search';
const strSearchResult = strSearch.search('search');
console.log(strSearchResult);

// 16) .slice(indexStart(inclusive), indexEnd(exclusive)) - Returns a `new` string from `indexStart` to `indexEnd`. `Can use` negative numbers.
const strSlice = 'This is a slice';
const strSliceResult = strSlice.slice(5, 10);
console.log(strSliceResult);

// 16) .split(separator, limit) - Splits string into an array of substrings. `Can use` negative numbers. Returns `new` array.
const strSplit = 'This is a split';
const strSplitResult = strSplit.split(' ');
console.log(strSplitResult);

const strSplit2 = 'Here is a bunch of words';
const strSplitResult2 = strSplit2.split(' ', 2);
console.log(strSplitResult2);

// 17) .startsWith(searchString, position) - Checks if string starts with `searchString`. Returns `boolean`.
const strStartsWith = 'This is a startsWith';
const strStartsWithResult = strStartsWith.startsWith('This');
console.log(strStartsWithResult);

// 18) .substring(indexStart(inclusive), indexEnd(exclusive)) - Returns a `new` string from `indexStart` to `indexEnd`. `Can't use` negative numbers.
const strSubstring = 'This is a substring';
const strSubstringResult = strSubstring.substring(5, 10);
console.log(strSubstringResult);

// 19) .toLowerCase() - Returns a `new` string with all lower case letters.
const strLowerCase = 'This is a lower case';
const strLowerCaseResult = strLowerCase.toLowerCase();
console.log(strLowerCaseResult);

// 20) .toUpperCase() - Returns a `new` string with all upper case letters.
const strUpperCase = 'This is a upper case';
const strUpperCaseResult = strUpperCase.toUpperCase();
console.log(strUpperCaseResult);

// 21) .toString() - Returns a `new` string.
const strToString = 123;
const strToStringResult = strToString.toString();
console.log(strToStringResult);

// 22) .trim() - Removes whitespace from both ends of string. Returns `new` string.
const strTrim = '    This is a trim    ';
const strTrimResult = strTrim.trim();
console.log(strTrimResult);

// 23) .trimEnd() - Removes whitespace from end of string. Returns `new` string.
const strTrimEnd = '    This is a trimEnd    ';
const strTrimEndResult = strTrimEnd.trimEnd();
console.log(strTrimEndResult);

// 24) .trimStart() - Removes whitespace from start of string. Returns `new` string.
const strTrimStart = '    This is a trimStart    ';
const strTrimStartResult = strTrimStart.trimStart();
console.log(strTrimStartResult);

// 25) .valueOf() - Returns `string` value of string.
const strValueOf = 'This is a valueOf';
const strValueOfResult = strValueOf.valueOf();
console.log(strValueOfResult);

//=====================================================================
console.log('--Practice--');

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

/* ------------------------------------ */

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
