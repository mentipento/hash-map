// array-from.js

let newArray1 = Array.from({length: 10}, (_, i) => i);

// console.log(newArray1);

let newArray2 = Array.from({length: 10}, (_, i) => i**2);

// console.log(newArray2);

let newArray3 = Array.from({length: 20}, () => Math.random().toFixed(2));

// console.log(newArray3);

let newArray4 = Array.from({length: 5}, () => Array.from({length: 5}, () => null));

// console.log(newArray4);

let newArray5 = Array.from('LinkedList');

// console.log(newArray5);

let newArrayBonus = Array.from({length: 10}, (_, i) => `Index ${i}`);

// console.log(newArrayBonus);