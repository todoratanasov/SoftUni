function solve(arg) {
    let answer=(x)=>{
        let sum=0;
        let dev=0;
        let con="";

        let count=x.length;

        for(let i=0; i<count; i++){
            sum+=+x[i];
            dev+=(1/+x[i]);
            con+=String(x[i]);
        }
        return [sum,dev.toFixed(4),con]

    }
    for (let token of answer(arg)) {
        console.log(token);
    }
}
solve([2,4,8,16])