function solve(arr) {
    let curr=-Infinity;
    let answer2=arr.filter((first)=>{

        if (first>=curr){
            curr=first;
            return first;
        }
    }).forEach((x)=>{
        console.log(x)
    });
}
solve([-1]
)