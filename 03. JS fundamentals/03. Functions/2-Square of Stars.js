function solve(arg) {
    let row= x=>{
        return "* ".repeat(arg)};

    for (let i=1; i<=arg; i++) {
        console.log(row())
    }

}
solve(5)