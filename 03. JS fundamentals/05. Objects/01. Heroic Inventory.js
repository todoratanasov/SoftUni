function solve(arr) {
    let answer=[];
    arr.forEach((x)=>{
        let input=x.split(" / ");
        let obj={
            "name":input[0],
            "level":+input[1],
            "items":input[2].split(", ")||[]
        }
        answer.push(obj);
    });
    console.log(JSON.stringify(answer))
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)