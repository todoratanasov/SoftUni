let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe("lookupChair Unit Test",function () {
    describe("No answer", function () {
        let result;
        beforeEach(()=>{
            result=lookupChar;
        });
       it('Pass an object should return undefined', function () {
        let result=lookupChar({},5);
        expect(result).to.be.undefined;
        });
        it('Pass an wrong type of index argument should return undefined', function () {
            let index="string";
            expect(result("string", index)).to.be.equal(undefined);
        });
        it('Pass a floating point number should return Incorrect index', function () {
            let string="string";
            let index=1.5;
            expect(result(string,index)).to.be.equal(undefined)
        });
    });
    describe("Index correctness test",()=>{
        let result;
        let string;
        beforeEach(()=>{
            result=lookupChar;
            string="string"
        });
        it('Pass a negative index.should return incorrect index', function () {
            let index=-1;
            expect(result(string,index)).to.be.equal("Incorrect index")
        });
        it('Pass a bigger index should return Incorrect index', function () {
            let index=string.length;
            expect(result(string,index)).to.be.equal("Incorrect index")
        });
    });
    it('If both params are OK should return single char', function () {
        let string="string";
        let index=0;
        let result=lookupChar;
        expect(result(string,index)).to.be.equal("s");
    });
    it('should ', function () {
        let result=lookupChar('message',6);
        expect(result).to.be.equal("e")
    });
} );

console.log(lookupChar("string", "string"))