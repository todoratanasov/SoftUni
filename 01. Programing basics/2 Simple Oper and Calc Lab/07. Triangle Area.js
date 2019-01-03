function solve([arg1,arg2]) {
    let sideA=Number(arg1);
    let h=Number(arg2);

    console.log(`Triangle area = ${((sideA*h)/2).toFixed(2)}`);
};
solve(["3","4"])