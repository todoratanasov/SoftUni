function solve(arrs) {
    let money={
        "100":0,
        "50":0,
        "20":0,
        "10":0,
        "5":0,
        "1":0
    };

    let count=0;
    let currentTrans=0;
    function balance(atm){
        let balance=0;
        for (let token in atm){
            balance+=+atm[token];
        }
        return +balance;
    };

    arrs.forEach((x)=>{
        if (x.length>2){
            //вкарваме в money
            x.forEach((s)=>{
                let bill=s.toString();
                if (money.hasOwnProperty(bill)){
                    money[bill]+=+bill
                    count++
                    currentTrans+=+(bill)
                }

                if (count===x.length){

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
                    let currentSum=x[1];

                    do {
                        if (currentSum>=100){

                            if (currentSum-money["100"]>0){
                                money["100"]=0;
                                cur
                            } else {
                                currentSum=(currentSum%100);
                                money["100"]=Math.floor(temp*(-1)/100)
                            }
                        }
                    } while (currentSum===0)
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