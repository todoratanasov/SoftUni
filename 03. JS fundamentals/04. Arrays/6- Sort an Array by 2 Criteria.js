function solve(arr) {
    arr.sort((a,b)=>a.length-b.length||a[0]-b[0]).map((x)=>{
        return x.toLowerCase();
    }).forEach((x)=>{
        console.log(x)});
}
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

)