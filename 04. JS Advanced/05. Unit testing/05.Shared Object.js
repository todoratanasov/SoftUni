let expect = require("chai").expect;
let assert = require("chai").assert;
let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("Shared object",()=>{
    describe("output object",()=>{
        let result;
        beforeEach(()=>{
            result=sharedObject;
        })
        it('should ', function () {

            assert.isObject(result);
        });
        it('should ', function () {
            assert.include(result, { name: null }, 'object contains property');
        });
        it('should ', function () {
            assert.include(result, { income: null }, 'object contains property');
        });
        
    });
    describe("Change name",()=>{
        let result;
        beforeEach(()=>{
            result=sharedObject.changeName;
        });
        it('if an empty string is passed it should leave name:null', function () {
            let name="Pesho";
            result(name);
            assert.equal(sharedObject.name,"Pesho");

        });
    })
})
