class rectangle {
    length;
    breadth;

    constructor(l, b) {
        this.length = l;
        this.breadth = b;
    }
    printarea() {
        console.log(`Area of rectangle is:${this.length * this.breadth}`);
    }
    printperimeter() {
        console.log(`Perimeter of rectangle is: ${2 * (this.length + this.breadth)}`);
    }

}
let rect = new rectangle(5, 6);
let rect2 = new rectangle(7, 8);
rect.printarea();
rect.printperimeter();
rect2.printarea();
rect2.printperimeter();
