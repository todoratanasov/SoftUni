function solve(arrs) {
    let money={};
    let count=0;
    let currentTrans=0;
    function balance(atm){
        let balance=0;
        for (let token in atm){
            balance+=+(token)*(+(atm[token]));
        }
        return +balance;
    }
    arrs.forEach((x)=>{
        if (x.length>2){
            //вкарваме в money
            x.forEach((s)=>{
                let bill=s.toString();
                if (!money.hasOwnProperty(bill)){
                    money[bill]=1
                    count++
                    currentTrans+=+(bill)
                }else {
                    money[bill]+=1
                    count++
                    currentTrans+=+(bill)
                };

                if (count==x.length){

                    count=0;
                    console.log(`Service Report: ${currentTrans}$ inserted. Current balance: ${balance(money)}$.`)
                };
            })
        }else if (x.length===2){
            //теглим пари
            if (x[0]<x[1]){
                console.log(`Not enough money in your account. Account balance: ${x[0]}$.` )
            } else {
                if (balance(money)<x[1]){
                    //ако нямаме толкова пари
                    console.log(`ATM machine is out of order!`)
                } else {

                }
            }
        } else if (x.length<2){
            //връщаме репорт
        }
    });

}
solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
)