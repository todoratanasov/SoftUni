function FunHuman(name,address){                        //създадена по този начин функцията с главна буква си означаваме,
    this.name = name||"Pesho";                          //че функцията ще бъде викана с new. след || всъщност е дифолтно
    this.address=address||"Mladost"
};


let pesho = new FunHuman("Pesho golemia", "mladost");   //по този начин Pesho ще стане обект с горните стойности,
                                                        //а защото има аргументи можем да подадем name и address така

let humanObj={
    name:"Pesho",
    address:"Mladost",
    walk:function () {

    }
};

//!!!винаги да закачаме когато имаме функция в обект създаден чрез функция по този начин:
FunHuman.prototype.sleep = function () {};              //по този начин ще създаде пропърти с функция sleep на функцията,
                                                        //с която си създаваме обекти и вече създадените ще получат sleep

//ако закачим функция на обекта по начина по-долу то тази функция ще е статична и ще е само за функцията, а няма да се
//прехвърли на създадените обекти защото не е на прототипа
FunHuman.eat = function () {};

//CLASS
class ClassHuman{                                       //по този начин създаваме class (което е реално обект)
    constructor(name, address){
        this.name = name||"Pesho";
        this.address = address||"Drujba"
    }
    walk(a,b){}                                         //това се добавя към прототипа!!!
    sleep(a,b){}
}

let peshoClass = new ClassHuman("Pesho","Center");      //създава ни нов обект, който ще ПОЛЗВА от прототипа и walk и sleep

ClassHuman.prototype.run = function () {};              //по този начин ще закачим на протипа на класа нова функция и всички,
                                                        //които ползват прототипа му ще имат достъп до нея.
/////////////
//статични функции (само на класа)
class ClassHumanWithStatic{                                       //по този начин създаваме class (което е реално обект)
    constructor(name, address){
        this.name = name||"Pesho";
        this.address = address||"Drujba"
    }
    walk(a,b){}                                         //това се добавя към прототипа!!!
    sleep(a,b){}

    static eat(){                                       //по този начин ще добавим статична функция, която ще си е само на класа

    }
}

ClassHumanWithStatic.eat();                             //така се викат статичните функции

/////////////

//get и set - идеята е тук да правим ВАЛИДАЦИЯ защото реално set-a взима стойността, която подаваме при искането
//за създаване на инстанция от класа, а get-а прави валидацията и връща това, което искаме да е в случая в name

class peshoClass{                                       //по този начин създаваме class (което е реално обект)
    constructor(name, address){
        //this.name = name||"Pesho";
        this.address = address||"Drujba"

        this._name = "";
    }
    get name(){
        return this._name;
    }
    set name(val){
        this._name = val;
    }
    walk(a,b){}                                         //това се добавя към прототипа!!!
    sleep(a,b){}
}

peshoClass.name = "Peshon"                              //по този начин се извиква get и set-а и се слага стойност
