class rectangle {
    height;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    rectangle() {
        console.log(`area of rectangle is ${this.height * this.width}`);
    }
    star(patternchar) {
        let str = '';
        for (let i = 0; i <this.height; i++) {
            str = str + ' ' + patternchar;

        }
        console.log(str);
        for (let i = 1; i < this.width; i++) {
            console.log(str);     
        }

    }
}
let rect = new rectangle(5, 6);
rect.rectangle()
rect.star('#')