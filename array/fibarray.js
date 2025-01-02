let fib = [];
let first = 1;
let second = 1;

fib.push(first);
fib.push(second);






for (i = 2; i <= 20; i++) {
    sum = first + second;
    fib.push(sum);
    first = second;
    second = sum;
}
console.log(fib);

