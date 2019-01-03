function solve(arr) {
    let keys=arr.filter((x)=>{
        if (arr.indexOf(x)%2===0){
            return x;
        }
    });
    let values=arr.filter((x)=>{
        if (arr.indexOf(x)%2!==0){
            return x;
        }
    }).map((x)=>{
        return +x;
    });
    let obj={};
    let count=0;
    for (let token of keys){
        if (Object.keys(obj).includes(token)==false){

        obj[token]=values[count]
        count++
        } else {
            obj[token]+=+values[count]
            count++
        }
    }
    console.log(JSON.stringify(obj));

}
solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])