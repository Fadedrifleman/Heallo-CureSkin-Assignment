//Convert input to output using javascript
//Input = [{ a: 1 }, { b: 2 }, { c: 3 }]
//Output = { a: 1, b: 2, c: 3 }

const input = [{ a: [1,2] }, { b: 2 }, { c: 3 }];
let output = {};

input.forEach(ele=> {
    output[Object.keys(ele)] = Object.values(ele).length > 1?Object.values(ele):Object.values(ele)[0];
})
console.log(output);
