
// Function scope (var) vs block scope (let/const)
function scopeDemo() {
  if (true) {
    var x = 'function-scoped (var)';
    let y = 'block-scoped (let)';
    const z = 'block-scoped (const)';
  }
  console.log(x); // works: var is function-scoped
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}
scopeDemo();