function solve(arg) {
    let answer=arg.map((token)=>{
        let a=[];
        if ((arg.indexOf(token)%2===0)||arg.indexOf(token)===0){
            a.push(token)
        }
        return a;
    }).filter((token)=>{
        return token!="";
    });
    console.log(answer.join(" "));
}
solve(['20', '30', '40', '30', '90'])