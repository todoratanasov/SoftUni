function solve([x0,y0,z0,x1,y1,z1]){
  let x = x0 - x1;
  let y = y0 - y1;
  let z = z0 - z1;

  console.log(Math.sqrt( x * x + y * y + z * z ));
}

solve([1, 1, 0, 5, 4, 0]);