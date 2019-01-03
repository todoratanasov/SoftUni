function solve(arg) {
    let num=arg[0];
    let seq=arg.length-1;
    let command="";


    for (let i=1; i<=seq; i++){
        command=arg[i];
        let action=(x,y)=>{
            //x-number
            //y-command
            if (y==="chop"){
                return x/2;
            } else if (y==="dice"){
                return Math.sqrt(x);
            } else if (y==="spice") {
                return x+1;
            }else if (y==="bake") {
                return x*3;
            }else if (y==="fillet") {
                return x - (x*0.2);
            }
        }
        console.log(action(num,command));
        num=action(num,command)
    }
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])