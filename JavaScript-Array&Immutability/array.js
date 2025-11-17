const nums=[1,2,3,4,5];

//Non mutating methods
const doubled=nums.map(n=>n*2);
console.log("map",doubled);

const evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens); // [2, 4]

const sliced = nums.slice(1, 3);
console.log("slice:", sliced); // [2, 3]

//Mutating methods
nums.push(6);
console.log("push:", nums); // [1,2,3,4,5,6]

nums.reverse();
console.log("reverse:", nums); // [6,5,4,3,2,1]

// 3. Immutable update pattern
const arr = [10, 20, 30];

const newArr = [...arr, 40]; // add item immutably
console.log(newArr); // [10,20,30,40]

const replaced = arr.map(n => (n === 20 ? 99 : n));
console.log(replaced); // [10,99,30]

const removed = arr.filter(n => n !== 20);
console.log(removed); // [10,30]
