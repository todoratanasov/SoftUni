function solve(arr) {
    let count=arr.pop();
    let answer=arr.slice(0);
    for (let i=0; i<count; i++){
        let first=answer.pop();


        answer.unshift(first);

    }
    console.log(answer.join(" "));
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']

)