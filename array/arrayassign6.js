const numbers = [3, 5, 7, 9];
sum = numbers.reduce((n, total) => n + total, 0);
console.log(`sum =${sum}`);

product = numbers.reduce((product, n) => product * n);
console.log(`product =${product}`);


concat = numbers.reduce((str, n) => str + '-' + n);
console.log(concat);

