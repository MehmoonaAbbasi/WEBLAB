function findLargest(a, b, c) {
  if (a > b && a > c) {
    console.log(a + " is largest");
  } else if (b > a && b > c) {
    console.log(b + " is largest");
  } else {
    console.log(c + " is largest");
  }
}
findLargest(6, 2, 3);