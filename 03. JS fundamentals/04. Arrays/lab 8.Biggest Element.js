function solve(arr) {

    let count=arr.length;
    let answer=[];
    for (let i=0; i<count; i++){

        answer=answer.concat(arr[i]);
        if (i==count-1){
            let final=answer.sort((a,b)=>b-a);
            console.log(final[0]);
        }
    }

}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 99]]

);