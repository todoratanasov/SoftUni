let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", ()=>{
    let result;
    beforeEach(()=>{
        result=isOddOrEven;
    });
    describe("Wrong type of arguments",()=>{
        it('If passed param is Number should return undefined', function () {
            let string=9;
            expect(result(string)).to.be.equal(undefined);
        });
        it('If passed object as param should return undefined', function () {
            let string={};
            expect(result(string)).to.be.equal(undefined);
        });
        it('If passed param is an boolean should return undefined', function () {
            let string=true;
            expect(result(string)).to.be.equal(undefined);
        });
    });
    describe("Correct output",()=>{
        let result;
        beforeEach(()=>{
            result=isOddOrEven;
        })
        it('If param length is even should return even', function () {
            let string = "No";
            expect(result(string)).to.be.equal("even")
        });
        it('If param length is odd should return odd ', function () {
            let string="yes"
            expect(result(string)).to.be.equal("odd")
        });
        it('If param\'s length is 0 should return even', function () {
            let string="";
            expect(result(string)).to.be.equal("even");
        });
    })

})