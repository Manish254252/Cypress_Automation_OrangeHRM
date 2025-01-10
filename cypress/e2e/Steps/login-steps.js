import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

let stub;

Before(() => {
  cy.log("Executing before step");
  stub = cy.stub();
});

Given("I access Login Portal Page", () => {
  cy.visit(Cypress.config("baseUrl"));
});

When("I enter a username {word}", (userName) => {
  cy.get('[name="username"]').type(userName);
});

When("I enter a password {word}", (password) => {
  cy.get('[name="password"]').type(password);
});

When("I click on the login button", () => {
  cy.get('[type="submit"]').click();
});

Then("I should be redirected to Dashboard page", () => {
  cy.get('[class="oxd-topbar-header-breadcrumb"]').should(
    "have.text",
    "Dashboard"
  );
});

Then(
  "I should be presented with the following message {word} {word}",
  (message, message2) => {
    cy.get(".oxd-alert-content-text").should(
      "have.text",
      "Invalid credentials"
    );
  }
);