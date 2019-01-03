function solve(array, command) {
    if (command==="asc") {
        array.sort((a, b) =>a-b);
    } else {
        array.sort((a,b)=>b-a)
    }
    return array;
}

solve([14, 7, 17, 6, 8], 'asc');

function f(array, order) {
    if (order==='asc'){
        return (array.sort((a,b)=>{
        return a-b;}))
    } else {
        return (array.sort((a,b)=>{
            return b-a;}))
    }
}

f([14, 7, 17, 6, 8], 'asc')