let marks = 90;
let grade;
let result;

if (marks >= 90) {
    grade = "A";
    result = "you scored distinction";

} else if (marks >= 80) {
    grade = "B";
    result = "you scored first class";
} else if (marks >= 70) {
    grade = "C";
    result = "you scored second class ";
} else if (marks >= 60) {
    grade = "D";
    result = "you scored third class ";
} else {
    grade = "F";
    result = "you failed ";

}
console.log(`your grade is ${grade} and ${result}`);