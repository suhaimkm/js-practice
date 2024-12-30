let sum = 0
let remainder ;
let str = 'Sum of odd numbers  ';

for (let i=1;i<=10;i++){
    remainder=i%2;
    if (remainder > 0){
        str = str + i + ' ';
        sum = sum + i ;
    }
}
str =str + ' is ' + sum ;
console.log(str);






