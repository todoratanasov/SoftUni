function solve(arg) {
    let x1=10;
    let x2=50;
    let y1=20;
    let y2=80;
    let z1=15;
    let z2=50;

    let arr=[];

    for (let i = 0; i < arg.length; i+=3) {
        let x = 0;
        let y = 0;
        let z = 0;

        x = arg[i];
        y = arg[i + 1];
        z = arg[i + 2];

        let answer = (a,b,c) => {

            for (let i = 0; i < 3; i++) {

                if (a >= x1 && a <= x2) {
                    if (b >= y1 && b <= y2) {
                        if (c >= z1 && c <= z2) {
                            return true
                        }
                    }
                }
            }
            return false;
        }
        if (answer(x,y,z)) {
            console.log("inside")
        }else {
            console.log("outside")
        }
    }

}
solve([13.1, 50, 31.5,50, 80, 50,-5, 18, 43])