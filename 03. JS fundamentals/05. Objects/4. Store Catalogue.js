function solve(arr) {
    function compare(a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }
    let mainArr=[];
    arr.forEach((x)=>{
        let input=x.split(" : ");
        let obj={
            name:input[0],
            price:input[1]
        }
        mainArr.push(obj)
    });
    let answer=mainArr.sort(compare);

    for (let i=0; i<answer.length; i++){
        let temp="";
        for (let token of answer){
            temp=token.name[0];
            for (let word of answer){

            }
        }
    }

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)