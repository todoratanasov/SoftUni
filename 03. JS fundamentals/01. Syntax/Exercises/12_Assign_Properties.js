function solve(arg)
{
    let jsonD = {};

    for(let i = 0; i < arg.length; i+= 2) {
      jsonD[arg[i]] = arg[i + 1];
    }

    console.log(jsonD);
 }

 solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);