function solve(arr) {
    let mainObj={};
    function sortObject(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    };
    function sortObjectObject(o) {
        return Object.keys(o).sort().reduce((r, k) => (k[r] = o[r], k), {});
    };
    arr.forEach((x)=> {
        let input = x.split(", ");
        let operation = input[0];
        let brand = input[1];
        let name = input[2];
        let expire = input[3];
        let quantity = +input[4];


        if (input[0].toLowerCase() === "in") {

            if (!mainObj.hasOwnProperty(brand)) {
                mainObj[brand] = {};
                mainObj[brand][name] = {};
                mainObj[brand][name]["expire"] = expire;
                mainObj[brand][name]["quantity"] = quantity;
            } //
            else {
                if (!mainObj[brand].hasOwnProperty(name)) {

                    mainObj[brand][name] = {};
                    mainObj[brand][name]["expire"] = expire;
                    mainObj[brand][name]["quantity"] = quantity;
                } //
                else {
                    let present = mainObj[brand][name]["expire"].split("-");
                    let newDate = expire.split("-");
                    if (present[0] < newDate[0]) {
                        mainObj[brand][name]["expire"] = expire
                        mainObj[brand][name]["quantity"] = quantity
                    } //
                    else if (present[1] < newDate[1]) {
                        mainObj[brand][name]["expire"] = expire
                        mainObj[brand][name]["quantity"] = quantity
                    } //
                    else if (present[2] < newDate[2]) {
                        mainObj[brand][name]["expire"] = expire
                        mainObj[brand][name]["quantity"] = quantity
                    } //
                    else if (present[0] === newDate[0] && present[1] === newDate[1] && present[2] === newDate[2]) {
                        mainObj[brand]["quantity"] = (mainObj[brand]["quantity"]) + quantity
                    }//
                }//
            }//
        }//
        else if (input[0].toLowerCase() == "out") {
            if (mainObj.hasOwnProperty(brand)) {
                if (mainObj[brand].hasOwnProperty(name)) {
                    let present = mainObj[brand][name]["expire"].split("-");
                    let newDate = expire.split("-");
                    let quantityInStorage = mainObj[brand][name]["quantity"];
                    if (quantityInStorage > quantity) {
                        if (present[0] < newDate[0]) {
                            mainObj[brand][name]["quantity"] -= quantity
                        } else if (present[1] < newDate[1]) {
                            mainObj[brand][name]["quantity"] -= quantity
                        } else if (present[2] < newDate[2]) {
                            mainObj[brand][name]["quantity"] -= quantity
                        }
                    }
                }
            }
        } //
        else if (input[0].toLowerCase() == "report") {
            console.log(">>>>> REPORT! <<<<<");
            for (let token in mainObj) {
                console.log(`Brand: ${token}:`)
                for (let name in mainObj[token]) {
                    console.log(`-> ${name} -> ${mainObj[token][name]["expire"]} -> ${mainObj[token][name]["quantity"]}.`)
                }
            }
        }else if (input[0].toLowerCase()=="inspection") {
            let ordered = sortObject(mainObj);
            let ordered2=sortObjectObject(ordered);
            for (let token in ordered2){
                console.log(ordered2[token]);
            }

        }
    })
}
solve([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
)