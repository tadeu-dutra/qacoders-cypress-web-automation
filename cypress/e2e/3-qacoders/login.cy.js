/// <reference types="cypress" />
const element = require("../../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() => {
    cy.screenshot();
});

describe("Login", () => {
    it("Successful Login", () => {
        const email = Cypress.env("EMAIL");
        const password = Cypress.env("PASSWORD");
        cy.login(email, password);
    });

    it.only("Login - invalid email", () => {
        cy.get(element.input_email).type(Cypress.env('INVALID_EMAIL'));
        cy.get(element.input_password).type(Cypress.env('PASSWORD'));
        cy.get(element.btn_login).click();
        cy.failedLogin();
    });

    it("Login - invalid password", () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.get(element.input_password).type(Cypress.env('INVALID_PASSWORD'));
        cy.get(element.btn_login).click();
        cy.failedLogin();
    });
})