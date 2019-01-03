function solve(arg) {
    for (let i=1; i<=arg; i++){
        console.log("*".repeat(i));
    }
    for (let i=arg-1; i>=1; i--) {
        console.log("*".repeat(i))
    }
}
solve(5)