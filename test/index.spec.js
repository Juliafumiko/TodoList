const mocha = require("mocha")
const expect = require("chai").expect
const app = require("../index")

describe("ui test for todo app",()=>{ //rimlig rubrik

    it("should find my delete btn and remove the last todo",()=>{ // namn som beskriver testet
        expect(app).to.exist //chai syntax för assert
    })
})