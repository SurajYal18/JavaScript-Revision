
// Function scope (var) vs block scope (let/const)
function scopeDemo() {
  if (true) {
    var x = 'function-scoped (var)';
    let y = 'block-scoped (let)';
    const z = 'block-scoped (const)';
  }
  console.log(x); // works: var is function-scoped
  // console.log(y); // ReferenceError: y is not defined
  // console.log(z); // ReferenceError: z is not defined
}
scopeDemo();

//Closure
function makeCounter(start=0){
  let count=start;
  return{
    increment(){
      count+=1;
      return count;
    },
    decrement(){
      count-=1;
      return count;
    },
    get(){
      return count;
    },
    reset(v=0){
      count=v;
      return count;
    }
  }
}
const c = makeCounter(5);
console.log('start:', c.get());      // 5
console.log('inc:', c.increment());  // 6
console.log('dec:', c.decrement());  // 5
console.log('reset:', c.reset(10));  // 10

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var loop i =>', i), 10);
}
//3,3,3 due to function-scoped

for(let j=0;j<3;j++){
  setTimeout(()=>console.log('let loop j=>',j),20);
}

for (var k = 0; k < 3; k++) {
  (function (kk) {
    setTimeout(() => console.log('IIFE kk =>', kk), 30);
  })(k);
}

function makeSquares() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(() => i * i);
  }
  return arr;
}
const fns = makeSquares();
console.log(fns[0](), fns[1](), fns[4]()); // should print "0 1 16"
