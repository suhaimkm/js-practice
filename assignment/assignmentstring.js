const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig",
    "grape"];

const longStrings = strings.filter(string => string.length > 5);
console.log(longStrings);

const  upperCaseStrings = strings.map(string => string.toUpperCase())
console.log(upperCaseStrings);

const containsA = strings.filter(string => string.startsWith('a'));
console.log(containsA);

const Concatenate = strings.map(string => `${string} - Processed`);
console.log(Concatenate);