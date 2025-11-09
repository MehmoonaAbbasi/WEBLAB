const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("EVEN NUMBERS ARE:");

for (let n of numbers) {
  if (n % 2 === 0) {
    console.log(n);
  }
}