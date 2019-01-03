function triangleOfDollars(n) {
  let line = '';
  let row = +n;

  for(let col = 1; col <= row; col++) {
    line += '$';
    console.log(line);
  }
}

triangleOfDollars(5);