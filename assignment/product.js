const products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
];

filterProducts = products.filter(product => product.stock > 10);

filterProducts2 = products.filter(product => product.name.startsWith('H'));
console.log(filterProducts2);


productsMap = products.map(product =>{
    return {
        name: product.name,
        price: product.price * 0.15 + product.price,
        stock: product.stock
    }
    });

console.log("orginal array");
console.log(products);
console.log("filtered array");
console.log(filterProducts);
console.log(" 15% increased");
console.log(productsMap);