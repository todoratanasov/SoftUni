function solve ([day, month, year]) {
  console.log(new Date(year, month - 1, 0).getDate());
}

solve([13, 12, 2004]);