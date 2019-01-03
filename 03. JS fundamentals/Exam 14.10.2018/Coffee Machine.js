function solve(arr) {
    let caffeine=0.8;
    let decaf=0.9;
    let tea=0.8;
    let income=0;
    arr.forEach((x)=>{
        let input=x.split(", ");
        if (input[1]=="coffee"&&input.includes("milk")) {
            let money = +input[0];
            let drink = input[1];
            let type=input[2];
            let sugar=+input[4];
            let price=0;
            if (type==="caffeine"){
                price+=+((caffeine+(caffeine*0.1)).toFixed(1));
            } else {
                price+=+((decaf+(decaf*0.1)).toFixed(1));
            }
            if (sugar !=0){
                price+=0.1
            };
            if ((money-price)>=0){
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(money-price).toFixed(2)}$`);
                income+=price;
            } else  {
                console.log(`Not enough money for ${drink}. Need ${(price-money).toFixed(2)}$ more.`)
            };
        } else if (input[1]=="coffee"&&input.includes("milk")==false){
            let money = +input[0];
            let drink = input[1];
            let type=input[2];
            let sugar=+input[3];

            let price2=0;
            if (type==="caffeine"){
                price2+=+caffeine;
            } else {
                price2+=+decaf;
            }
            if (sugar !==0){
                price2+=0.1
            };

            if ((money-price2)>=0){
                console.log(`You ordered ${drink}. Price: ${price2.toFixed(2)}$ Change: ${(money-price2).toFixed(2)}$`);
                income+=price2;
            }else  {
                console.log(`Not enough money for ${drink}. Need ${(price2-money).toFixed(2)}$ more.`)
            }
        } else if (input[1]==="tea"&&input.includes("milk")){
            let money=+input[0];
            let drink=input[1];
            let sugar=+input[3];

            let price=+((tea+(tea*0.1)).toFixed(1));

            if (sugar!==0){
                price+=0.1;
            }
            if ((money-price)>=0){
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(money-price).toFixed(2)}$`);
                income+=price;
            } else  {
                console.log(`Not enough money for ${drink}. Need ${(price-money).toFixed(2)}$ more.`)
            };


        } else if (input[1]==="tea"&&input.includes("milk")===false){
            let money=+input[0];
            let drink=input[1];
            let sugar=+input[2];

            let price=tea;
            if (sugar!==0){
                price+=0.1;
            }
            if ((money-price)>=0){
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(money-price).toFixed(2)}$`);
                income+=price;
            } else  {
                console.log(`Not enough money for ${drink}. Need ${(price-money).toFixed(2)}$ more.`)
            };

        }
    });
    console.log(`Income Report: ${income.toFixed(2)}$`)

}
solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
)