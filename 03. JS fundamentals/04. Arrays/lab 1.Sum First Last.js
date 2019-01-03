function solve(arg) {
    let input=arg.map((num)=>{
        return +num;
    });
    let first=0;
    let last=input.length-1;
    console.log(input[first]+input[last])
}
solve(['20'])