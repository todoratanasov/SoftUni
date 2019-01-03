function solve(arr) {
    let del=arr[arr.length-1];
    let answer=arr.filter((x)=>{
        return x!=`${del}`;
    })
    console.log(answer.join(`${del}`));
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
)