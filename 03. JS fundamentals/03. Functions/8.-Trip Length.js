function solve(arg1) {
    let points=[[arg1[0],arg1[1]],[arg1[2],arg1[3]],[arg1[4],arg1[5]]];

    let first=points[0];
    let second=points[1];
    let third=points[2];


    let formula = (a,b,c,d)=>{
        return Math.sqrt(Math.pow((c-a),2)+(Math.pow((d-b),2)));
    };

}
solve([0, 0, 2, 0, 4, 0])