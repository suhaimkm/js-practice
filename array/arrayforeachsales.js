let sales = [100, 200, 300, 400, 500, 600];
totalsales = 0;
sales.forEach((sales, i) => {
    console.log(`sales of day ${i + 1} is ${sales}`);
    totalsales += sales;
});
console.log(`total sales is ${totalsales}`);
