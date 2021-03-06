let obj = {
    name: "todor";                        //по този начин създаваме обект KVP ключа ВИНАГИ е стринг
};

obj.name                                    //по този начин достъпваме пропъртитата

obj["name"]                                 //по този начин, но в стринг достъпваме обекта

let name = "name";

mainObj["Sofia"]["laptops"]                 //ключовете на обектите ВИНАГИ трябва да са в кавички

obj[name]                                   // по този начин ще вземе стойността на променливата name и пак ще работи

obj.age = 18                                //по същия начин както достъпваме, но с = променяме пропъртитата или добавяме
                                            //ключ и стойност

delete obj.name                             //по този начин се трие пропърти, но е мноого бавно
                                            //по-правилно е да сетваме пропъртито на Null

//всяка една от функциите, с които работихме с масиви може да се прилагат и в обектите

let keys = Object.keys(obj)                 //Object. има много неща в него, с които се работи с обекти
                                            //в случая ще ни върне масив от ключовета на obj

let value=obj[keys[0]];                     //ще ми върне стойността на първия ключ

let values=Object.values(obj)               // ще върне масив със всички стойности

Object.freeze(obj);                         //замразява обекта и не може да се променя по никакъв начин (добавяне, триене и пр.)

//JASON обект

let jsonObj = {                             //главно се използва за пренос на данни всичко останало си важи като а обектите
   "firstName": "Pesho",
   "age": 18

};

let str=JSON.stringify(jsonObj);                    //връща стринговата репрезентация

let json = JSON.parse(str);                         //по този начин ще върне JSON формат



// MAP - държат се като обекти, но за ключ може да има каквото си поискаме

let test = new Map([["firstName", "Pesho"],
["city", "Sofia"]]);

test.set("firstName", "Pesho");             //по този начин правим и сетваме стойности и ключове в Map

test.get("firstName");                      //достъпваме велюто на това в скобите

let set=new Set();                          //това е масив, който не позволява да има еднакви стойности

//примерно итериране през обект

Object.keys(obj).forEach((key)=>{console.log(obj[key])}); //ще достъпим всички стойности една по една

[...typeCount];                             //typeCount е Map и резултата key, value, но в отделни масиви
                                            // [ [ 'string', 1 ], [ 'number', 1 ], [ 'function', 1 ] ]

[...typeCount].sort((a,b)=> b[1]-a[1])      //направо може да се ползват методите

return result.sort((a,b)=>a["status"]>b["status"]); //друг начин за сортиране