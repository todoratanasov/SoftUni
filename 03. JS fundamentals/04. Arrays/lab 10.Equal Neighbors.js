function solve(mtr) {
    let mtrLength=mtr.length;
    let count=0;

    for (let i=0; i<mtrLength-1; i++){
        let array=mtr[i];
        for (let k=0; k<mtrLength; k++){
            let secArray=mtr[i+1];
            if (array[k]===secArray[k]){
                count++;
            }
        }
    }
    for (let i=0; i<mtrLength; i++){
        let array=mtr[i];
        if (array[i]===array[i+1]){
            count++;
        }
    }
    console.log(count);
}
solve([['2', '2', '5', '7','4'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]

)