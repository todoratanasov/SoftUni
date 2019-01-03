function solve(arr) {
    let negative=arr.filter((x)=>{
        return x<0;
    }).sort((a,b)=>b-a);
    let positive=arr.filter((x)=>{
        return x>=0
    });
    let answer=negative.concat(positive);
    for (let num of answer){
        console.log(num);
    }

}
solve([])