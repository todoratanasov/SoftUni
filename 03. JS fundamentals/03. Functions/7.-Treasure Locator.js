function solve(arg) {
    let count=arg.length;

    //масива на островите е подреден x1,y1,x2,y2,name
    let tuvalu=[1,1,3,3,"Tuvalu"];
    let tokelau=[8,0,9,1,"Tokelau"];
    let tonga=[0,6,2,8,"Tonga"];
    let samoa=[5,3,7,6,"Samoa"];
    let cook=[4,7,9,8,"Cook"];

    let answer = [];

    let islands=[tuvalu,tokelau,tonga,samoa,cook];

    let formula=(x,y,arr)=>{
        let is = false;
        //x и y са координатите на точката, а arr е масив от координати на острова

        let x1=arr[0];
        let y1=arr[1];
        let x2=arr[2];
        let y2=arr[3];

        if (((x>=x1)&&(x<=x2))&&((y>=y1)&&(y<=y2))) {
            is=true;
        }
        return is;
    }

    for (let i=0; i<count; i+=2){
        let x=arg[i];
        let y=arg[i+1];
        let ostrov="";
        let itIs=false;

        for (let token of islands){
            itIs=formula(x,y,token)
            ostrov=token[4];
            if (itIs){
                break;
            }
        }

        if (itIs){
            answer.push(ostrov)
        } else {
            answer.push("On the bottom of the ocean")
        }
    }

    for (let token of answer){
        console.log(token);
    }
}
solve([4, 2, 1.5, 6.5, 1, 3])