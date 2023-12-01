function getElementWidth(content, padding, border) {
    let x = Number.parseFloat(content);
    let y = Number.parseFloat(padding);
    let z = Number.parseFloat(border);
    y *= 2;
    z *= 2;
    const resultWidth = x + y + z;
    return resultWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200