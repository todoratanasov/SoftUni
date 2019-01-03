function solve(input) {
  let time1 = +input[0];
  let time2 = +input[1];
  let hours = +input[2] / 3600;

  console.log(Math.abs((time1 * hours) - (time2 * hours)) * 1000);
}

solve([11, 10, 120]);