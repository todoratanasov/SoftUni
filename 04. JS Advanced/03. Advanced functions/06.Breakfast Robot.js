()=>{
    let obj={
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0

    };//склад
    return function solution(str) {
        let input=str.split(" ");

        let ingredients={
            apple:{
                carbohydrate:1,
                flavour:2
            },
            coke:{
                carbohydrate:10,
                flavour:20
            },
            burger:{
                carbohydrate:5,
                fat:7,
                flavour:3
            },
            omelet:{
                protein:5,
                fat:1,
                flavour:1
            },
            cheverme:{
                protein:10,
                carbohydrate:10,
                fat:10,
                flavour:10
            }
        };
        function restock() {
            //трябва да добавя KVP в обекта
            if (!obj.hasOwnProperty(input[1])){
                obj[input[1]]=+input[2];
            }else {
                obj[input[1]]+=+input[2]
            };
            return "Success"

        };
        function prepare() {
            //трябва да проверява дали има необходимите съставки и да връща success или error
             let ingr=ingredients[input[1]];
             let quantity=input[2];

            for (let ingredient in ingr) {
                if (!obj.hasOwnProperty(ingredient)){
                    return `Error: not enough ${ingredient} in stock`

                }
                if (ingr[ingredient]*quantity>obj[ingredient]) {
                    return `Error: not enough ${ingredient} in stock`

                }
            }
            for (let ingredient in ingr){
                obj[ingredient]-=ingr[ingredient]*quantity
            };
            return "Success"




        };
        function report() {
            //трябва да итерира през обекта склад
            let answer="";
            let keys=Object.keys(obj).forEach((x)=>{

                answer+=`${x}=${obj[x]} `
            });
            return answer.trim();
        };
        if (input[0]==="restock"){
            return restock();
        } else if (input[0]==="prepare"){
            return prepare();
        } else if (input[0]==="report") {
            return report();
        }
    }



};


manager("restock carbohydrate 10");
manager("restock flavour 10");
manager("prepare apple 1");
manager("restock fat 10");
manager("prepare burger 1");
manager("report");