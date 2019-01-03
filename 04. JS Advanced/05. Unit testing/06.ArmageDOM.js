let expect = require("chai").expect;
let assert = require("chai").assert;
let jsdom=require('jsdom')();
let $=require('jquery');

let nuke=function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};
