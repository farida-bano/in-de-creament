let x: number = 5;

// Post-decrement: The value of x is first used in the expression, then decremented
let y: number = x--; // y = 5, x = 4

console.log("Post-decrement:");
console.log("x:", x); // Output: 4
console.log("y:", y); // Output: 5

// Reset x
x = 5;

// Pre-decrement: The value of x is decremented first, then used in the expression
let z: number = --x; // z = 4, x = 4

console.log("\nPre-decrement:");
console.log("x:", x); // Output: 4
console.log("z:", z); // Output: 4
