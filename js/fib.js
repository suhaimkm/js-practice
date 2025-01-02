let first = 1;
let second = 1;
let str = 'first 10 fibonnaci numbers are :  ' +  first  + ' ' + second +' ';




console.log(first);
console.log(second);

for (i = 2; i <= 20; i++) {
  sum = first + second;
  str = str + sum + ' ';



first = second;
second = sum;









}
console.log(str)
