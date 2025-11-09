const numbers = [1, 2, 3, 4, 5, 6, 9];
let max = numbers[0];
let min = numbers[0];
for (let num of numbers) {
     if (num < min) {
    min = num;
  }
  if (num > max) {
    max = num;
  }
 
}
console.log("Minimum Number:", min);
console.log("Maximum Number:", max);
