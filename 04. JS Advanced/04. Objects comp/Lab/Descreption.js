//Обекти

//closure -

//pattern -

function createHuman(name, eyeColor) {
    return {
        name:name,
        eyeColor: eyeColor,
        walk: function () {

        }
    }
};

let pavel=createHuman("Pavel", "brown");

let human = {                                               //по този начин си създаваме ДИФОЛТЕН обект
    name: "Pesho",
    eyeColor: "brown",
    walk: function () {

    }
};

let todor=Object.create(human);                             //по този начин ще си създадем нов обект todor, но с всичко
                                                            //което има дифолтния human

todor.name = "Todor";                                       //така сетваме вече новите стойности
todor.eyeColor = "Blue"                                     //така сетваме вече новите стойности

human.prototype;                                            //това е референция към самия обект

human.newProperty = "mladost"                               //по този начин ще добавим ново пропърти със стойност в дифолтния
                                                            //клас, който ще се появи абсолютно във всички обекти създадени
                                                            //с Object.create(human) дори и преди това защото ще си го взима
                                                            //от human



