function solve(arr) {
    let obj={};
    let input=arr.toString()
        .split(/[\W]/).filter((x)=>{
        if (x!==""){
            return x;
        }
    }).map((x)=>{
        return x.toLowerCase();
        })
        .sort((a,b)=>a-b)
        .forEach((x)=>{
        if (! obj.hasOwnProperty(x)){
            obj[x]=1;
        } else {
            obj[x]+=1
        }
    });
    for (let word in obj){
        console.log(`'${word}' -> ${obj[word]} times`)
    }
}
solve(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])