//IIFI

(function(){
//do something
})();

// this

//начини за извикване:

let obj = {
    name: "Pesho",
    walk: function () {
        console.log(this.name)
    }
};
let secondPerson={
    name:"Gosho"
};

obj.walk();                                                 //ще си принтира като this.name "Pesho";

obj.walk.call(secondPerson);                                //тук вече ще принтира като this.name това, което стои след name
                                                            //във втората функция - "Gosho"

let obj = {
    name: "Pesho",
    walk: function (title, address) {
        console.log(`${title} ${this.name} with ${address}`)
    }
};
let secondPerson={
    name:"Gosho"
};
let thirdPerson={
    name: "Pencho"
}
obj.walk.call(secondPerson, "Mr", "Sofia");                 //първо secondPerson е функцията, която извикваме (this) и
                                                            //след това подаваме параметрите, които ще иска тази функция

obj.walk.apply(secondPerson);                               //пак ще промени контекста на this и ще върне "Gosho"

obj.walk.apply(secondPerson,["param1", "param2"]            //същото като горе, но подаваме вторите параметри като масив
                                                            //this отново е променен и е name-на secondPerson

const myWawlk = obj.walk.bind(thirdPerson);                 //присвоява новата функция на променливата.. резултата от цялото
                                                            //нещо след равното
myWawlk("miss", "Burgas");                                   //така я извикваме реално thirdPerson и подаваме параметрите


//Да се използва предимно arrow function

document.getElementById("#element")
    .addEventListener("click", obj.walk.bind(obj));         //по този начин си извикваме функциите защото сменяме this