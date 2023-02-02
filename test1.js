//Convert input to output using javascript
//Input = { a: 1, b: 2, c: 3 }
//Output = [{ a: 1 }, { b: 2 }, { c: 3 }]

const input = { a: 1, b: 2, c: 3 };
const keys= Object.keys(input);
const values = Object.values(input);
const output = [];
keys.forEach((a,i)=>{
    output.push({a: values[i]});
});
console.log(output);