function solve(mtr) {
    let count=mtr.length;
    let main=0;
    let sec=0;
    for (let i=0; i<count; i++){
        main+=+mtr[i].filter((x)=>{
            if (mtr[i].indexOf(x)===i){
                return x;
            } else {
                return 0;
            }
        })
        sec+=+mtr[count-1-i].filter((x)=>{
            if (mtr[count-1-i].indexOf(x)===i) {
                return x;
            } else {
                return 0;
            }
        })
    }
    console.log(`${main} ${sec}`);

}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)