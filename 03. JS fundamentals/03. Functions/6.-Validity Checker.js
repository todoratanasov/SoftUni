function solve(arg1) {
   let formula = (a,b,c,d)=>{
        return Math.sqrt(Math.pow((c-a),2)+(Math.pow((d-b),2)));
    };

    let toPrint = (x,y,z,l,is)=>{
        if (is){
            console.log(`{${x}, ${y}} to {${z}, ${l}} is valid`)
        } else {
            console.log(`{${x}, ${y}} to {${z}, ${l}} is invalid`)
        }
    };


    let answer=(arr,x=0,y=0)=>{
        let x1=arr[0];
        let y1=arr[1];
        let x2=arr[2];
        let y2=arr[3];

        if (formula(x1,y1,x,y)%1===0){
            toPrint(x1,y1,x,y,true)
        } else {
            toPrint(x1,y1,x,y,false)
        }
        if (formula(x2,y2,x,y)%1===0){
            toPrint(x2,y2,x,y,true)
        } else {
            toPrint(x2,y2,x,y,false)
        }
        if (formula(x1,y1,x2,y2)%1===0){
            toPrint(x1,y1,x2,y2,true)
        } else {
            toPrint(x1,y1,x2,y2,false)
        }

    }
    answer(arg1);


}
solve([2, 1, 1, 1])