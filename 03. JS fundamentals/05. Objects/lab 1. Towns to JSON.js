function solve(arr) {
    let townsArr=[];
    for (let town of arr.slice(1)){
        let x=town.split(/\s*\|\s*/).filter((x)=>{
            return x!="";
        });
        let obj={
            "Town":x[0],
            "Latitude":+x[1],
            "Longitude":+x[2]
        }

        townsArr.push(obj);
    }
    console.log(JSON.stringify(townsArr));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)