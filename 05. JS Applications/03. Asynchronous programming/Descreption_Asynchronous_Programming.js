//Promises

//състояния:
//pending
//fulfilled
//failed

//hint! да потърся в github Promises A+;

promise.all - iterable                                  //получава масив от promises

promise.race()                                          //

promise.reject(reason)                                  //

promise.resolve(value)                                  //

//създаване на promise:

let p = new Promise((resolve, reject)=>{
    if("operation successful"){
        resolve("нещо")
    }else {
        reject("нещо друго")
    }
});
//Вариант 1
p.then((result)=>{
    //правим нещо с result, което е resolve от promise-а по-горе
}).catch((error)=>{
    //правим нещо с error-а
});

//Вариант 2 и по-правилен

p.then((result)=>{"успех и ползваме result"},(error)=>{"грешка и ползваме error"});

//////
//Ако искам да ползвам promise в jquery се ползва jqXHR:
jqXHR.done((data,textStatus,jqXHR)=>{});                     //при успешна заявка вика callback function

jqXHR.always((data|jqXHR,textStatus,jqXHR|errorThrown)=>{});

.than()                                                 //връща, но без promise и след него не може да се чейнва

jqXHR.then(function,function)                           //същото като горния then

//Async/Await

function resolveAfter2Seconds() {                       //тази реално е функцията, която ще се забави
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        },2000)
    })
}
async function asyncCall() {                            //така създаваме функция, която ще изчака
    console.log("calling");
    let result = await resolveAfter2Seconds();          //ще спре, че изчака resolveAf... да върне и ще продължи
    console.log(result);
}
asyncCall();

//вариант 2 предимството, е че времето ще е реално това на най-дългата функция

let concStart = async function f() {
    console.log(new Date());

    let sec2=function;
    let sec1=function;

    await sec2();
    await sec1();
};

//вариант 2 на вариант 2

let promAll = function () {
    Promise.all([function(), function()]).then((data)=>{   //Promise.all връща резултата от тези функции като МАСИВ
        console.log(data[0]);
        console.log(data[1]);
    })
};

//вариант 3 - паралелно напълно

let paralelStart = function () {
    function1().then((data)=> {
        console.log()});

    function2().then((data)=> {
        console.log()});;

}