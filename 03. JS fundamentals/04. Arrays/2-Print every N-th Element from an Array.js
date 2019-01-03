function solve(arr) {
    let n=+arr.pop();

    for (let i=0; i<arr.length; i+=n){
        let p="";
        console.log(p+=arr[i])
    }
}
solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
)