class Human {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("wawlking");
    }
}
class Employee extends Human{                           //ПО този начин казваме, че искаме новия клас да наследи всичко от
    constructor(name, jobTitle) {                       //класа Human
        super(name)
        this.jobTitle = jobTitle;
    }
    work(){
        console.log("working")
    }
}

const pesho= new Employee("Pesho", "worker")

obj.hasOwnProperty("Pesho")                             //по този начин ще проверим дали obj има пропъртито в скобите

//Абстрактен клас

//Promisess Много, много важно
///////////////////
function doSomethingSlow() {
    const count = 10;
    return new Promise(function (resolve, reject) {     //по този начин се задава Promise. Функция, която има две функции
        resolve(count);                                 //точно тези за параметри и съответно връщат това в скобите
        reject("Error...")
    });
}
doSomethingSlow().then(function (data) {                //извиквайки функцията това е начина, по който достъпваме инфото
    console.log(data)                                   //което ще върне Promis-а във функцията
}).catch(function (error) {                             //по този начин ловим грешката
    console.log(error);
});
////////////////

doSomethingSlow().then(function (data) {                //извиквайки функцията това е начина, по който достъпваме инфото
    return data;                                        //което ще върне Promis-а във функцията
}).then(function (data) {
    console.log(data)                                   //можем да чейнваме колкото си поискаме then. Новият винаги ще работи
})                                                      //с това, което е ретърннал предишния then
    .catch(function (error) {                             //по този начин ловим грешката
    console.log(error);
});

///////////////

function evenSlowerFunction() {
    return doSomethingSlow().then(function (data) {     //за да ползваме функция във функция трябва да я ретърннем
        return "Pesho";
    }).then(function (data) {
        return data;
    })
        .catch(function (error) {
            console.log(error);
        });
}
evenSlowerFunction()
    .then((data)=>{
        console.log(data)
    })

//////