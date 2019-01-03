function solve(arg1, arg2) {
    let n=arg1;
    let k=arg2;

    let array=[];

    for (let i=1; i<k; i++){
        array.push(0);
        if (i==k-1){
            array.push(1)
        }
    }

    for (let i=0; i<n-1; i++) {
        let answer = array.slice(0+i, k+i).reduce((acc, cur) => {
            return acc + cur;
        });
        array.push(answer);
    }
    console.log(array.filter((x)=>{
        return x!=0;
    }));

}
solve(5, 9)