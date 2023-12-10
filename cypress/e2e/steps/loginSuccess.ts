import { Given, When, Then } from "cypress-cucumber-preprocessor";

Given("I am on landing page", () => {
  cy.intercept("GET", "/entries").as("getEntries");
  cy.visit("https://www.demoblaze.com");
  cy.wait("@getEntries");
});
When("I send login form with correct credentials", () => {
  cy.get('[id="login2"]').click();
  cy.get('input[id="loginusername"]').should("exist").type("123");
  cy.get('input[id="loginpassword"]').should("exist").type("456");
});
Then("I am logged in", () => {
  cy.intercept("POST", "/login").as("postLogin");
  cy.wait("@postLogin");
});
