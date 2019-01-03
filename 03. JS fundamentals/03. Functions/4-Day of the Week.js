function solve(arg) {
    let day=arg.toLowerCase();
    let answer=(x)=>{switch (day) {
        case "monday":
            return 1
        break;
        case "tuesday":
            return 2
        break;
        case "wednesday":
            return 3
        break;
        case "thursday":
            return 4
            break;
        case "friday":
            return 5;
            break;
        case "saturday":
            return 6
        break;
        case "sunday":
            return 7
        break;

    }
    return "error"};
    console.log(answer(arg));
}


solve("asdf")