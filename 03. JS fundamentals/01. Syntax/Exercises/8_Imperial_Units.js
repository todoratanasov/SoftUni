function solve(inches) {
  let feetFromInches = Math.floor(inches / 12);
  let inchesRemainder = inches % 12;

  let result = feetFromInches + "'-" + inchesRemainder + "\"";
  console.log(result);
}

solve(55);