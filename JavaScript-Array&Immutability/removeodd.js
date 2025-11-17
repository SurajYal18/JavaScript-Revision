const nums = [3, 5, 8, 10, 15];

const result = nums
  .filter(n => n % 2 === 0)  // keep evens
  .map(n => n * 3);          // multiply by 3

console.log(result); // [24, 30]
console.log(nums);   // original unchanged
