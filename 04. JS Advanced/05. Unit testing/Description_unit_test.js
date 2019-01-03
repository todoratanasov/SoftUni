//винаги първо да правим проверки дали входните данни са ОК
//пример:
function f(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)){
        return NaN;                                         //функцията се return-ва
    }
    if (startIndex < 0 ){
        startIndex=0;                                       //по този начин си сетваме логически стойностите, за да работи
    }
    if (endIndex > arr.length-1){
        endIndex=arr.length-1;                              //отново същото
    }
    //започваме функцията
}

//Exceptions

throw new Error("Invalid state");                         //така се хвърля грешка

throw new RangeError();

throw new TypeError();

throw new ReferenceError();

//try catch

try {
    //Тук пишем кода и си добавяме грешките
    throw new Error("Epic error");//това ще бъде хванато като аргумент по-долу ex
} catch (ex) {
    //тук се изпълнява, ако горе излезне грешка. Лови и грешки, които ние не сме предвидили
    //и можем тук да обработваме грешка, да я запишем в лог, да я пратим на сървър и пр., но да не я покажем на
    //потребителя
    console.log(ex);

} finally {                                         //във finally независимо горе какво става кода тук ще се изпълни

}

//unit testing

//!!!!!!!!!!!!!!!!!www.chaijs.com е сайта, в който ги има всичките думички, които ще ползваме за тестовете
//!!!!!!!!!!!!!!!!!по-правилно е да се ползва отново в този сайт функционалността на assert защото е по-приятен за писане
//assert.equal(3, '3','==error message')           //(каква е стойността, която подаваме, какво очакваме да получим, съобщение, ако не)
//1. AAA Pattern:

//unit testing frameworks - това трябва да се ползва - Mocha е най-известния
//работят в комбинаиция с Assertion framworks - Chai, assert.js, Should.js
//най-известната комбинация е Mocha + Chai
//има и mocking frameworks. Най-известния е Sinon

//преди да се започне работа по js файла се конфигурира webstorm-а (или друго IDE), че ще има тестове

//от debugger-а на node -> edit configuration -> + бутона в ляво горе -> избираме си Mocha -> задаваме името на тестовете
//най-добре името на проекта + test -> слагаме отметка пред Test File -> Test Directory избираме папката с файла с тестовете -> apply

//ИЗКЛЮЧИТЕЛНО ВАЖНО:
//за да се ползва трябва в js файла отгоре да имаме:
let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $=require('jquery');
//както и това:
document.body.innerHTML = `<div id="wrapper"><input type="text" id="name"><input type="text" name="income"></div>`;
                    //
describe("sum(arr)", function () {                      //describe е функция на Mocha. Първи параметър името на нашата група от тестове
                                                        //втория параметър е функцията, която искаме да се изпълни когато ще се изпълни когато се стигне
                                                        //до изпълнението на тези тестве

    it("should return 3 for [1,2]", function () {       //it вече е конкретния тест
        expect(sum([1,2])).to.be.equal(3)               //expect идва от chai и вече казва, че функцията sum с параметри в скобите трябва да е
                                                        //to.be.equal(3)
    })
});

//пример за цял файл с тестове с expect
let expect = require("chai").expect;

function sum(firstNumber, secondNumber) {                       //това е функцията, която стои в главния файл
    let sum=firstNumber+secondNumber;
    return sum;
}

describe('I am a demo test describe', function () {
    it("some of two positive numbers", function () {
        expect(sum(15,30)).to.be.equal(45)
    })
    it("some of two negative numbers", function () {
        expect(sum(-15,-30)).to.be.equal(-45)
    })
    it("some of positive and negative number", function () {
        expect(sum(-15,30)).to.be.equal(30)
    })
});

//пример за цял файл с тестове с assert
let assert = require("chai").assert;                            //в началото на файла
describe('I am a demo test describe', function () {
    assert.equal(sum([1,2]),3);
});


//добра практика

it("some of positive and negative number", function () {        //задаваме си в променливи инпута, който искаме и резултата от функцията
    const input=[1,2];

    const result=sum(input);

    expect(result).to.be.equal(3)                               //ползваме си променливите
    //или
    assert.equal(result),3);
});

it.only...                                                      //ще изпълни само този тест

//тестване на обект, който съдържа ФУНКЦИИ как да тестваме самите функции

it("should return object with all properties", () =>{
    const properties=["get", "add", "substract"];

    const result = ourFunction();

    assert.isObject(result);                                    //така ще проверим дали е обект

    assert.isTrue(properties.every((prop)=> Object.keys(result).includes(prop))); //така ще итерира през нашите варианти и ще ги сравни с ключовете на
                                                                //обекта, който ще върне нашата функция
    //или другия вариант

    assert.containsAllKeys(result, properties)                  //същото като горното, но съкратено

    Object.keys(result).forEach((key) =>{
        assert.isFunction(result[key])
    })
})

//правим нов describe

describe("get",()=>{

    it("should return default value", ()=>{
        const calculator = ourFunction();                           //присвояваме си ресултата от функцията ни (това, кеото връща)

        const result=calculator.get();                              //присвояваме функцията get от обекта ни calculator

        assert.equal(result, 0)
    })

});

describe("other cases",()=>{
    it("should create and double add",()=>{
        const calculator = ourFunction();

        calculator.add(2);
        calculator.add(3);

        const result = calculator.get();

        assert.equal(result,5)
    })
});

//за улеснение има:

describe("something",()=>{
    let calculator;

    beforeEach(()=>{                                        //ще се изпълни веднъж в началото на всеки describe и после можем да си го ползваме
        calculator=ourFunction();                           //във всеки it
    });
    afterEach(()=>{                                         //ще се изпълни веднъж след всеки тест

    })

});

//пример за писане на DOM тестове!
let expect = require("chai").expect;
let assert = require("chai").assert;
let jsdom=require('jsdom-global')();
let $=require('jquery');

let nuke=function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe("ArmageDOM unit tests", ()=>{
    let oldHTML;
    let htmlSelector;
    beforeEach("Init the HTML",()=>{
        document.body.innerHTML=`
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
`;
        htmlSelector=$('#target');                                  //htmlSelector става това, което рънваме в beforeEach сиреч сайта
        oldHTML=htmlSelector.html();                                //oldHTML по този начин става innerHTML-а на това, което сме селектирали горе
    });

    it('Should not remove with an invalid selector', function () {
        //let oldHTML=$(htmlSelector).html();
        nuke(htmlSelector,5);                                       //функцията приема два селектора. Подаваме единя, и втори грешен и я викаме
        expect(htmlSelector.html()).to.be.equal(oldHTML)            //задаваме, че искаме това, което се е получило след извикването
    });                                                             //да си е същото като началния html. т.е. да не се е променило нищо
})