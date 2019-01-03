function solve(arr) {
    let mainObj={}//тук слагаме ключове градове, а стойности обекти с ключове продукти и стойност цена
    arr.forEach((x)=>{
        let input = x.split(/[ ]+[->\|\[:\]]+[ ]+/);
        let town=input[0];
        let product=input[1];
        let price=input[2];

        if (! mainObj.hasOwnProperty(town)){
            //ако няма град с това име
            mainObj[town]={};
            mainObj[town][product]=price;
        } else {
            //ако има град с това име

            if (! mainObj[town].hasOwnProperty(product)){
                //ако няма продукт в града с това име
                mainObj[town][product]=price;
            } else  {
                //ако има продукт с такова име
                if (mainObj[town][product]>price){
                    //ако цената е по-ниска от настоящата
                    mainObj[town][product]=price;
                }
            }
        }
    });
    let answer={}//тук ще слагаме ключове продуктите със стоности обекти, които ще имат стойности цените
    for (let town in mainObj) {
        for (let product in mainObj[town]){
            let price = mainObj[town][product];
            if (! answer.hasOwnProperty(product)){
                //ако answer няма ключ product
                answer[product]={};
                answer[product][town]=price;

            } else {
                //ако има такъв ключ
                for (let token in answer[product]){
                    if(answer[product][token]>price){
                        delete answer[product][token];
                        answer[product][town]=price;

                    };
                }
            }
        }

    }

    for (let product in answer){
        for (let town in answer[product]){
            console.log(`${product} -> ${answer[product][town]} (${town})`)

        }
    }
}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
)