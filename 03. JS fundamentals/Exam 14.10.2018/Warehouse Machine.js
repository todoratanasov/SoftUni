function solve(arr) {
    let mainObj={
        name:{}
    };
    arr.forEach((x)=> {
        let input = x.split(", ");
        let operation = input[0];
        let brand = input[1];
        let name = input[2];
        let expire = input[3];
        let quantity = +input[4];


        if (input[0].toLowerCase() === "in") {

            if (!mainObj["name"].hasOwnProperty(brand)) {
                mainObj["name"][brand] = {};
                mainObj["name"][brand][name] = {};
                mainObj["name"][brand][name]["expire"] = expire;
                mainObj["name"][brand][name]["quantity"] = quantity;
            } //
            else {
                if (!mainObj["name"][brand].hasOwnProperty(name)) {

                    mainObj["name"][brand][name] = {};
                    mainObj["name"][brand][name]["expire"] = expire;
                    mainObj["name"][brand][name]["quantity"] = quantity;
                } //
                else {
                    let present = mainObj["name"][brand][name]["expire"].split("-");
                    let newDate = expire.split("-");
                    if (present[0] < newDate[0]) {
                        mainObj["name"][brand][name]["expire"] = expire
                        mainObj["name"][brand][name]["quantity"] = quantity
                    } //
                    else if (present[1] < newDate[1]) {
                        mainObj["name"][brand][name]["expire"] = expire
                        mainObj["name"][brand][name]["quantity"] = quantity
                    } //
                    else if (present[2] < newDate[2]) {
                        mainObj["name"][brand][name]["expire"] = expire
                        mainObj["name"][brand][name]["quantity"] = quantity
                    } //
                    else if (present[0] === newDate[0] && present[1] === newDate[1] && present[2] === newDate[2]) {
                        mainObj["name"][brand]["quantity"] = (mainObj["name"][brand]["quantity"]) + quantity
                    }//
                }//
            }//
        }//
        else if (input[0].toLowerCase() == "out") {
            if (mainObj["name"].hasOwnProperty(brand)) {
                if (mainObj["name"][brand].hasOwnProperty(name)) {
                    let present = mainObj["name"][brand][name]["expire"].split("-");
                    let newDate = expire.split("-");
                    let quantityInStorage = mainObj["name"][brand][name]["quantity"];
                    if (quantityInStorage > quantity) {
                        if (present[0] < newDate[0]) {
                            mainObj["name"][brand][name]["quantity"] -= quantity
                        } else if (present[1] < newDate[1]) {
                            mainObj["name"][brand][name]["quantity"] -= quantity
                        } else if (present[2] < newDate[2]) {
                            mainObj["name"][brand][name]["quantity"] -= quantity
                        }
                    }
                }
            }
        } //
        else if (input[0].toLowerCase() == "report") {
            console.log(">>>>> REPORT! <<<<<");
            for (let token in mainObj["name"]) {
                console.log(`Brand: ${token}:`)
                for (let name in mainObj["name"][token]) {
                    console.log(`-> ${name} -> ${mainObj["name"][token][name]["expire"]} -> ${mainObj["name"][token][name]["quantity"]}.`)
                }
            }
        } else if(input[0].toLowerCase() == "inspection"){

            let ordered = {};
            Object.keys(mainObj["name"]).sort().forEach(function(key) {
                ordered[key] = mainObj["name"][key];
            });
            for (let token in ordered){
                console.log(ordered[token])
            }
           // console.log(">>>>> INSPECTION! <<<<<");
           //for (let token in mainObj["name"]) {
           //     console.log(`Brand: ${token}:`)
          //      for (let name in mainObj["name"][token]) {
          //          console.log(`-> ${name} -> ${mainObj["name"][token][name]["expire"]} -> ${mainObj["name"][token][name]["quantity"]}.`)
          //      }
        //    }
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