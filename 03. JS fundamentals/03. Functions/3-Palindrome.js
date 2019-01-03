function solve(arg) {
    let len=Math.floor(arg.length/2);
    let first=(x,y)=>{
        let a="";
        for(let i=0; i<len; i++){
            a+=arg[i];
        }
        let b="";
        if (arg.length%2!=0) {
            for (let i = arg.length - 1; i > len; i--) {
                b += arg[i];
            }
        } else {
            for (let i = arg.length-1; i >=len; i--) {
                b += arg[i];
            }
        }
        return [a,b];
    }


    if (first()[0]===first()[1]){
        console.log("true")
    } else {
        console.log("false")
    }

}
solve("racecsar")