/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

import login from "../pages/LoginPage";
import candidatePage from "../pages/CandidatePage";
import candidate from '../fixtures/candidate.json';
import data  from '../support/data.json';
import { ContentType } from '@shelex/cypress-allure-plugin'


describe("Candidates Page", () => {
  beforeEach(() => {
    cy.visit('/');
    login.login();
    candidatePage.clickRecruitment();
  });

  it("New candidate", () => {
    candidatePage.clickAddCandidates();
    candidatePage.fillForm();
    candidatePage.clickSave();
    cy.contains('.message','Successfully Saved').should('be.visible');
  });

  it("Search for candidate", () => {
    candidatePage.clickAddCandidates();
    candidatePage.fillForm();
    candidatePage.clickSave();
    candidatePage.clickRecruitment();
    candidatePage.searchNameCandidate(candidate.completeName);
    candidatePage.clickCandidate(candidate.completeName);
    candidatePage.downloadCV();
    // Its not working properly --TBD 
    cy.allure()
    .fileAttachment('Resume','/cypress/downloads/Resume.pdf', 'application/pdf')
  })

});