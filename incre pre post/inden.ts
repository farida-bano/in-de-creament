let x: number = 5;

// Post-increment: The value of x is first used in the expression, then incremented
let y: number = x++; // y = 5, x = 6

console.log("Post-increment:");
console.log("x:", x); // Output: 6
console.log("y:", y); // Output: 5

// Reset x
x = 5;

// Pre-increment: The value of x is incremented first, then used in the expression
let z: number = ++x; // z = 6, x = 6

console.log("\nPre-increment:");
console.log("x:", x); // Output: 6
console.log("z:", z); // Output: 6
