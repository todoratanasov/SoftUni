function solve(arr) {
    let arrayLength=arr.length;

    let answer=[];
    for (let i = 1; i<=arrayLength; i++){
        let temp=arr[i-1];
        if (temp==="add"){
            answer.push(i);
        }
        if (temp==="remove"){
            answer.pop();
        }
    }
    if (answer.length!=0) {
        answer.forEach((x) => {
            console.log(x)
        });
    }else {
        console.log("Empty")
    }

}
solve(['add',
    'add',
    'remove',
    'add',
    'add']

)