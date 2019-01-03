function solve(arr) {

    let count=arr.length;
    let answer=[];
    for (let i=1; i<count; i+=2){
        answer.push(arr.slice(i,(i+1)))
    }
    let final=answer.map((x)=>{return x*2}).reverse().join(" ");
    console.log(final);
}
solve([10, 0, 10, 4, 7, 3])