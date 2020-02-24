"use strict";

// här skricver vi våra UI tester

// mocha syntax
describe("ui test for todo app", function () {
    //valfri testrunbrik som beskriver,
    // att detta är en samling av test för din app/sida/

    it("visit starting page for app", function () {

        cy.visit("http://localhost:8001/todo");

        cy.get("#todoinput").type("go to gym").should("have.value", "go to gym");

        cy.contains("Post").click({ force: true });

        cy.get(".fa-trash-alt").click({ multiple: true });

        // kolla om länk eller knapp eller något finns
        // om länk finnes, klicka
        // kontrollera att vi hamnar på rätt sökväg
    });
});