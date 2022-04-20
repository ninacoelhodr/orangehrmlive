/// <reference types="Cypress" />

import data  from '../support/data.json';

class LoginPage {
  
  visit() {
    cy.visit('/');
  }

  login() {
   cy.get(data.locatorsLogin.username).type(Cypress.env('username'))
   cy.get(data.locatorsLogin.password).type(Cypress.env('password'))
   cy.get(data.locatorsLogin.loginButton).click();
  }

}

export default new LoginPage();