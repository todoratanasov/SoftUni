function solve(arr) {
    let array=arr.sort((a,b)=>a-b);
    let count=array.length;

    let answer=[];
    for (let i=0; i<count; i++){
        let temp = array[i];
        if (answer.includes(temp)||answer.length<3){
            answer.push(temp)
        }
        if (answer.length===2){
            i=count;
        }
    }
    console.log(answer.join(" "));
}
solve([3, 0, 10, 4, 7, 3])