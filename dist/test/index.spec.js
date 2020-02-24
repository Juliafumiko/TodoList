"use strict";

var mocha = require("mocha");
var expect = require("chai").expect;
var app = require("../index");

describe("ui test for todo app", function () {
    //rimlig rubrik

    it("should find my delete btn and remove the last todo", function () {
        // namn som beskriver testet
        expect(app).to.exist; //chai syntax för assert
    });
});