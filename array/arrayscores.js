let studentscores = [];
studentscores.push( 45, 78, 88 , 92 , 56);
console.log(`orginal scores : ${studentscores}`);
studentscores.pop();
studentscores.push( 67 , 89);
numbers2 = studentscores.map(n => n +5);
console.log(`updated scores (after +5 bonus) : ${numbers2}`);


