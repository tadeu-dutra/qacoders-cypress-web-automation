/// <reference types="cypress" />
const element = require("../fixtures/login.json")

Cypress.Commands.add("login", (email, password) => {
    cy.get(element.input_email).type(email);
    cy.get(element.input_password).type(password);
    cy.get(element.btn_login).click();

    cy.location().should((location) => {
        expect(location.pathname).to.eq("/login");
    });

    cy.get(element.btn_logout).should("be.visible");
});

Cypress.Commands.add("failedLogin", () => {
    cy.get(element.msg_alert).should('be.visible');
    // cy.get(element.error_message).should('have.text','E-mail e/ou senha inválidos');
    cy.get(element.msg_alert).should('have.text','E');
});
