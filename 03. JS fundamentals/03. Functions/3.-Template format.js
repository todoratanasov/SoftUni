function solve(arg) {
    let question="";
    let answer="";
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");
    for (let i=0; i<=arg.length-1; i+=2){
        question=arg[i];
        answer=arg[i+1];

        let template=(x,y)=>{
            console.log("<question>");
            console.log(x);
            console.log("</question>");
            console.log("<answer>");
            console.log(y);
            console.log("</answer>")
        }
        template(question,answer);
    }
    console.log("</quiz>");
}
solve(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"])