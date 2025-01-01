
let ans = fact(4);
console.log(ans);

function fact(n) {
    let factorial = 1;
    for (let i = n; i >=1 ; i--) {
        console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}
