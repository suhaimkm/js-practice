const products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
];

filterproducts = products.filter(product => product.stock > 10);
productsmap = products.map(product => product.price * 0.15 + product.price);

console.log("orginal array");
console.log(products);
console.log("filtered array");
console.log(filterproducts);
console.log(productsmap);