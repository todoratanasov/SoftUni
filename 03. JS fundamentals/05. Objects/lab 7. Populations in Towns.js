function solve(arr) {
    let obj={};
    let input=arr.forEach((x)=>{
        let str=x.split("<->");
        if (! obj.hasOwnProperty(str[0])){
            obj[str[0]]=+str[1]
        } else  {
            obj[str[0]]+=+str[1]
        }
    });
    for (let token in obj){
        console.log(`${token}: ${obj[token]}`);
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)