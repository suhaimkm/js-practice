let n = 15

function oddeven(n) {
    remainder = n % 2;
    if (remainder == 0) {
        console.log(`${n} is a even number `);
    } else {
        console.log(` ${n} is a odd number `);
    }

}
oddeven(n);