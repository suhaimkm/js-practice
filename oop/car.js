class car {
    model;
    year;
    color;

    constructor(m, y, c) {
        this.model = m;
        this.year = y;
        this.color = c;
    }
    printcar() {
        console.log(`the model is ${this.model} and the year is ${this.year} and the color is ${this.color}`);
    }
}

let myCar = new car('Toyota', 2015, 'red');
myCar.printcar();

