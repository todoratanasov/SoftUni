function solve(a, b, c) {
  let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

  if (result === result2) {
    console.log (result);
  } else if (result !== result2 && isNaN(result) === false && isNaN(result2) === false) {
    console.log (result2);
    console.log (result);
  } else {
    console.log('No');
  }
}

solve(4, 3, 1);