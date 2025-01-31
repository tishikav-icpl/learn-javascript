// const score=400
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// const s1 = new String("yes")
// console.log(s1)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toFixed(1))

// const anothernum =12.2321454454
// console.log(anothernum.toPrecision(4))


// const h1 = 10000000000
// console.log(h1.toLocaleString("en-IN"))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++
//By default laibrary in javascript 

console.log(Math);
console.log(Math.abs(-6)) //used for trans  nagative to positive
console.log(Math.round(4.6))//5
console.log(Math.round(4.2))//4
console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.8)) //4
console.log(Math.min(12,34,55,64,23))
console.log(Math.max(12,44,35,23,7,87,23))

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10 
const max = 50

console.log(Math.floor(Math.random()*(max-min+1))+min)
