//Convert input to output using javascript
//Input = { a: 1, b: 2, c: 3 }
//Output = [{ a: 1 }, { b: 2 }, { c: 3 }]

const input = { a: 1, b: 2, c: 3 };
const keys= Object.keys(input);
const values = Object.values(input);
const output = [];
for(let i = 0; i<keys.length; i++){
    let obj = {};
    obj[keys[i]] = values[i];
    output.push(obj);
}
console.log(output);