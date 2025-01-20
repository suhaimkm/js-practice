function pattern(patternchar, numlines) {
    let str = '';
    for (let i = 0; i < numlines; i++) {
        str = str + ' ' + patternchar;
        console.log(str);
    }
}
pattern('*', 4);