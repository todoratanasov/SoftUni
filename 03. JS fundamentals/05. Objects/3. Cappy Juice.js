function solve(arr) {
    let mainObj={};
    arr.forEach((x)=>{
        let input=x.split(" => ");
        let juice=input[0];
        let quantity=+input[1];
        if (!mainObj.hasOwnProperty(juice)){
            mainObj[juice]=quantity;
        } else  {

            let current=+mainObj[juice];
            delete mainObj[juice];
            mainObj[juice]=(current+quantity);
        }
    });
    for (let token in mainObj){
        if (mainObj[token]>=1000){
        let bottles=[mainObj[token]].map((x)=> {
            return Math.floor((+(x) / 1000));
        }).forEach((x)=>{
            console.log(`${token} => ${x}`);
        })

        }
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)