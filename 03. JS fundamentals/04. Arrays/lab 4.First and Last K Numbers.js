function solve(arr) {
    let k=arr[0];
    let input=arr.filter((x)=>{
        if (arr.indexOf(x)!=0) {
            return x;
        }
    });
    console.log(input.filter((x)=>{
        if (input.indexOf(x)<k){
            return x;
        }
    }));
    console.log(input.filter((x)=>{
        if (input.indexOf(x)>(input.length-1)-k){
            return x;
        }
    }))
}
solve([3,
    6, 7, 8, 9]

)