function solve(arg) {
    let limit=(x)=>{
        switch (x[1]) {
            case "city":
                return 50
            break;
            case "residential":
                return 20
            break;
            case "interstate":
                return 90;
                break;
            case "motorway":
                return 130
            break;
        }
    }

    let speeding=(x,y)=>{
        //x - int скоростта
        //y - func int лимит
        let speed=x-y;
        if(speed<=0){
            return "";
        }else if(speed<=20){
            return "speeding";
        }else if(speed<=40){
            return  "excessive speeding";
        }else {
            return "reckless driving";
        }
    }
    console.log(speeding(arg[0],limit(arg)));
}
solve([200, 'motorway'])