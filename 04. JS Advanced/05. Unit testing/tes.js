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
    htmlSelector=$('#target');
    oldHTML=htmlSelector.html();
    });

    it('Should not remove with an invalid selector', function () {
        let oldHTML=$(htmlSelector).html();
        nuke(htmlSelector,5);
        expect(htmlSelector.html()).to.be.equal(oldHTML)
    });
    it('should not remove with dublicate selector', function () {
        let selector1=$(".nested");
        nuke(selector1,selector1);
        expect(htmlSelector.html()).to.be.equal(oldHTML)
    });
    it('should not remove with two valid selectors selector', function () {
        let selector1=$(".nested");
        let selector2=$(".inside");

        nuke(selector1,selector2);
        expect(htmlSelector.html()).to.be.equal(oldHTML)
    });
    it('should remove with two valid selectors', function () {
        let selector1=$(".nested");
        let selector2=$(".target");

        nuke(selector1,selector2);
        expect(htmlSelector.html()).to.not.be.equal(oldHTML)
    });
})