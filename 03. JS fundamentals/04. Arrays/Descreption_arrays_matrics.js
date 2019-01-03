let gosho=[];
gosho[0]=5;                                 //добавяне в масив
gosho.push(4);                              //добавяне в масив най-отзад
let m=gosho.pop()                           //махаме отзад напред стойности и присвояваме стойността в случая към m
gosho.unshift()                             //добавя най-отпред
let g=gosho.shift()                         //маха най-отпред и в случая присвоява стойността на g

let pesho=[];

let newArray = gosho.concat(pesho)           //по този начин събираме два масива и създаваме нов;

let newNewArray = gosho.join("/")           //по този начин стрингосва целия масив и ги отделя с това в скобите;

gosho.reverse();                            //обръща целия масив;

let sliceArray = gosho.slice(1,3);          //взима стойности с начален индекс и краен индекс и присвоява стйностите в новия []

let newTheSameArray = gosho.slice(0)        //по този начин ще копира масива и ще присвои стойността;

let spliceArray = gosho.splice(1, 2, "pencho")  // изтрива ни елементите от начален индекс до БРОЙКАТА, която искаме
                                            //и присвоява стойността на spliceArray, а третия аргумент може да са безкрайно
                                            //много стойности, които ще ни навре в стария масив на мястото на това, кеото вземем

let spliceArray1 = gosho.splice(1, 2)        //може и така

let theIndex = gosho.indexOf(2)              //ще ми потърси СТОЙНОСТТА в скобите и ще върне индекса. Ако го няма ще присвои
                                             // стойност -1

gosho.lastIndexOf(2)                         //същото като горното

let isPresent = gosho.includes(2)            //връща boolean;


//МАТРИЦИ - най-общо казано масив от масиви и всичко за масиви важи тук

let tosho= [[1,2,3],
            [4,5,6],
            [7,8,9]];

console.log(tosho[0][1])                      //по този начин достъпваме вътрешните елементи (в случая числото 2)

//pure function ВАЖНО - би трябвало да се стремим в кода си всички функции да са pure

//same params => same result - функцията винаги с еднакви параметри да връща еднакви резултати

//no influence - да не променя параметри, от които зависят други функции (да не променяме примерно външни на скоупа масиви, пром и пр)

//Важна функционалност!!

let dogs = ["Huskey", "German shepard", "Sharo", "Lasi"];

dogs.forEach((item, index)=>{                   //по този начин ще трябва да работим занапред. Така си взимаме елементите
    console.log(index)                          //един по един и им прилагаме arrow функцията
});

let huskies = dogs.filter((dog)=>{              //в случая ще създаде нов масив съдържащ  "Huskey" в случая
    return dog === "Huskey"
})

let germanShep = dogs.find((param)=>{           //пак ще ни създаде нов масив съдържащ това, което е в кавичките
    return param === "German shepard"
})

let sharo = dogs.map((param)=>{                 //променя всеки един от елементите
    return param;
})

let sharo = dogs.map((param)=>{return dog.toLowerCase()}).forEach()  //chain-ват се няколко функции една след друга по този начин

let newMapArray = obekt.map((kliucha)=>{
    return kliucha.
})

let reduceFunc = dogs.reduce((acc, cur)=>{      //връщта стойността, която acc в момента е акумулатора сиреч можем да съберем
    return dog.name !== undefined;              //всички числа в масива като acc + cur(rent) acc е първото, а curr второто
}, 0);                                          //с нулата накрая задаваме начална стойност на acc

let m = [2,5,10,1,100];

m.sort();                                       //по този начин се сортира, но ЛЕКСИКОГРАФСКИ!!!

m.sort((a,b)=>a-b);                             //по този начин ще сортира числа

[].sort((a,b)=> a.name - b.name||a.address - b.address); // по този начин ще сортира първо по едно, а после по друго, трето и пр.

let count = 0;                                  //примерно как от два масива да си направя обект
for (let key of keys){                          //keys е масив и values е масив
    obj[key]=values[count];
    count++
}

let towns = {};
towns.hasOwnProperty("Gosho")                   //проверяваме дали има даден ключ