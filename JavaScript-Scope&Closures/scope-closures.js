
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

// Closure example: counter with private state
function makeCounter(start = 0) {
  let count = start; // private variable captured by returned functions

  return {
    increment() { count += 1; return count; },
    decrement() { count -= 1; return count; },
    get() { return count; },
    // expose reset to illustrate controlled mutation
    reset(v = 0) { count = v; return count; }
  };
}

const c = makeCounter(5);
console.log('start:', c.get());      // 5
console.log('inc:', c.increment());  // 6
console.log('dec:', c.decrement());  // 5
console.log('reset:', c.reset(10));  // 10

// Closure pitfall: loop with var & async callback
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var loop i =>', i), 10);
}
// Outputs 3,3,3 because var is function-scoped and callbacks run later with i===3

// Fix with let (block-scoped) or create new scope
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let loop j =>', j), 20);
}

// Or classic IIFE fix
for (var k = 0; k < 3; k++) {
  (function (kk) {
    setTimeout(() => console.log('IIFE kk =>', kk), 30);
  })(k);
}

// Memory/leak note: closures keep referenced variables alive
function leaky() {
  const huge = new Array(1e6).fill('*'); // imagine large structure
  return () => { console.log(huge[0]); }; // huge is retained as long as returned fn exists
}
const leakFn = leaky();
// When no longer needed, set leakFn = null to allow GC.
