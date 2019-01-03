function solve(arr) {
    let obj={};
    let input=arr.toString().split(/[\W]/).filter((x)=>{
        if (x!==""){
            return x;
        }
    }).forEach((x)=>{
        if (! obj.hasOwnProperty(x)){
            obj[x]=1;
        } else {
            obj[x]+=1
        }
    });
    console.log(JSON.stringify(obj))
}
solve(['JS devs use Node.js for server-side JS.-- JS for devs'])