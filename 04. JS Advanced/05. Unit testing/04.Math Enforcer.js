let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("Math enforcer object",()=>{
    describe("addFive function",()=>{
        let result;
        beforeEach(()=>{
            result=mathEnforcer.addFive;
        });
        it('If the param is a string it should return undefined', function () {
        let num="String";
        expect(result(num)).to.be.equal(undefined);
        });
        it('bool', function () {
            let num=true;
            expect(result(num)).to.be.equal(undefined)
        });
        it('If the argument is a Number should return a number', function () {
            let num=5;
            expect(result(num)).to.be.equal(10);
        });
        it('If argument is negative', function () {
            let num=-5;
            expect(result(num)).to.be.equal(0);
        });
        it('if is float', function () {
            let num=5.5;
            expect(result(num)).to.be.equal(10.5)
        });

    });
    describe("substractTen",()=>{
        let result;
        beforeEach(()=>{
            result=mathEnforcer.subtractTen;
        });
        it("mathEnforcer.subtractTen({pesho:5}) should return undefined",function(){
            expect(mathEnforcer.subtractTen({pesho:5})).to.equal(undefined);
        });
        it('If the param is a string should return undefined', function () {
        let num="String";
        expect(result(num)).to.be.equal(undefined)
        });
        it('If param is a positive number it should return a number', function () {
            let num=10;
            expect(result(num)).to.be.equal(0);
        });
        it('negative should return number', function () {
            let num=-10;
            expect(result(num)).to.be.equal(-20);
        });
        it('if is float', function () {
            let num=10.5;
            expect(result(num)).to.be.equal(0.5)
        });
        it('0', function () {
            let num=0;
            expect(result(num)).to.be.equal(-10)
        });
        it("mathEnforcer.subtractTen(5) should return -5",function(){
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
    });
    describe("sum",()=>{
        let result;
        beforeEach(()=>{
            result=mathEnforcer.sum;
        });
        it("mathEnforcer.sum('-5','-5') should return undefined",function(){
            expect(mathEnforcer.sum('-5','-5')).to.equal(undefined);
        });
        it("mathEnforcer.sum(0,0) should return undefined",function(){
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        });
        it('if num1=string ', function () {
                let num1="String";
                let num2=1;
                expect(result(num1,num2)).to.be.equal(undefined)
        });
        it('if num2=string ', function () {
            let num2="String";
            let num1=1;
            expect(result(num1,num2)).to.be.equal(undefined)
        });
        it('if num2=string && num1=string ', function () {
            let num2="String";
            let num1="String";
            expect(result(num1,num2)).to.be.equal(undefined)
        });
        it('should return number if both, are positive', function () {
            let num1=1;
            let num2=1;
            expect(result(num1,num2)).to.be.equal(2)
        });
        it('num1=negative', function () {
            let num1=-1;
            let num2=1;
            expect(result(num1,num2)).to.be.equal(0);
        });
        it('should return number if both are negative', function () {
            let num1=-1;
            let num2=-1;
            expect(result(num1,num2)).to.be.equal(-2)
        });
        it('should return undefined if is only one param', function () {
        let num1=0;
        expect(result(num1)).to.be.equal(undefined)
        });
        it("mathEnforcer.sum(0,0) should return undefined",function(){
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        });
        it("mathEnforcer.sum() should return undefined",function(){
            expect(mathEnforcer.sum()).to.equal(undefined);
        });
        it("mathEnforcer.sum([-5,-5]) should return undefined",function(){
            expect(mathEnforcer.sum([-5,-5])).to.equal(undefined);
        });
        it("mathEnforcer.sum('Pesho','pesho') should return undefined",function(){
            expect(mathEnforcer.sum('pesho','pesho')).to.equal(undefined);
        });
        it("mathEnforcer.subtractTen() should return undefined",function(){
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        });
        it('should ', function () {
            expect(mathEnforcer.subtractTen(10.001)).equal(10.001-10)
        });
        it('float', function () {
            let num1=0.1;
            let num2=1;
            expect(result(num2,num1)).to.be.equal(1.1)
        });
        it('float', function () {
            let num1=0.1;
            let num2=0.1;
            expect(result(num2,num1)).to.be.equal(0.2)
        });
    })
})
