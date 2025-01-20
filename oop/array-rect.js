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
let rect3 = new rectangle(9, 10);
const rectangles = [];
rectangles.push(rect, rect2, rect3);
printrectangles(rectangles);
function printrectangles(rectangles) {
    for (const r of rectangles) {
        console.log(`********************`);
        console.log(`length : ${r.length}`);
        console.log(`breadth : ${r.breadth}`);
        r.printarea();
        r.printperimeter();
        console.log(`*******************\n`);

    }
}




