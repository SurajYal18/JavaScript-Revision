//Normal Function
function greet(name){
    return `Hello,${name}!`;
}
console.log(greet("Suraj"));


//Arrow Function
const square=n=>n*n;
console.log("Square:",square(5));

//Higher-order function that accepts another function
function applyTwice(fn,value){
    return fn(fn(value));
}
console.log("Apply twice:",applyTwice(x=>x+1,3));

//Higher-order function returning a function 
function createMultiplier(factor) {
  return function (n) {
    return n * factor; // closure captures factor
  };
}
const double = createMultiplier(2);
console.log("Double:", double(7));

//Common HOFs on arrays 
const nums=[1,2,3,4,5];
console.log(
    "map:",
    nums.map(n=>n*20)
);
console.log(
    "filter:",
    nums.filter(n=>n%2===0)
);
console.log(
    "reduce(sum):",
    nums.reduce((acc,n)=>acc+n,0)
);

// Function returning function with private memory
function callCounter() {
  let count = 0;
  return () => ++count;
}
const counter = callCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3