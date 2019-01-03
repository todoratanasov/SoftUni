function solve(arr) {
    let answer=[];
    let mainObj=arr.filter((x)=>{
        let input=x.split(/[ ]+[->\|\[:\]]+[ ]+/);
        let town=input[0];
        let product=input[1];
        let quantity=input[2];
        let price=input[3];
        let obj={};
        if (! answer.hasOwnProperty(town)){
            answer[town]={};
            answer[town][product]=+(quantity*price);
        } else {
            if (! answer[town].hasOwnProperty(product)){
                answer[town][product]=+(quantity*price);

            } else {
                obj[town][product]+=+(quantity+price)
            }
        }
    });
    for (let token in answer){
        console.log(`Town - ${token}`)
        for (let prod in answer[token]){
            console.log(`$$$${prod}:${answer[token][prod]}`)
        }
    }
}
solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
)