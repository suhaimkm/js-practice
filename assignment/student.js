const students = [
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 85 },
];

const filterstudent = students.filter(student => student.marks > 60);
console.log(filterstudent);

const totalMarks = students.reduce((total, student) => student.marks + total,0);
console.log(`student total marks ${totalMarks}`);

let averageMarks = totalMarks / students.length;
console.log(` average marks ${averageMarks}`);
