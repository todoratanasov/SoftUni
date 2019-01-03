function solve(arg) {
    let number=arg;
    
    let averageValue=(x)=>{
        let string=String(x);
        let sum=0;
        for (let i=0; i<string.length; i++) {
            sum+=+string[i];
        }
        return sum/string.length;
    };
    let addNine=(x)=>{
        let string=String(x)+9;
        //получаваме в x настоящето число
        return +string;
    };
    if (averageValue(number)>5) {
        console.log(number);
    } else {
        let isDone = x => {
            if (x > 5) {
                return false
            } else {
                return true;
            }
        }

        do {
            addNine(number);
            number=addNine(number);
        } while (isDone(averageValue(number)));
        console.log(number);
    }
}
solve(100000)