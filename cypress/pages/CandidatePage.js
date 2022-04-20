/// <reference types="Cypress" />

import data  from '../support/data.json';
import candidate from '../fixtures/candidate.json';

class CandidatePage {
  
  clickRecruitment() {
   cy.get(data.locatorsMenu.recruitment).click();
  }

  clickAddCandidates() {
    cy.get(data.locatorsRecruitment.addCandidateButton).click();
  }

  fillForm() {
    cy.get(data.locatorsRecruitment.addCandidate.firstName).type(candidate.firstName);
    cy.get(data.locatorsRecruitment.addCandidate.middleName).type(candidate.middleName);
    cy.get(data.locatorsRecruitment.addCandidate.lastName).type(candidate.lastName);
    cy.get(data.locatorsRecruitment.addCandidate.email).type(candidate.email);
    cy.get(data.locatorsRecruitment.addCandidate.contactNo).type(candidate.contactNo);
    cy.get(data.locatorsRecruitment.addCandidate.vacancy).select(candidate.vacancy);
    cy.upload(data.locatorsRecruitment.addCandidate.cv, 'Resume.pdf');
    cy.get(data.locatorsRecruitment.addCandidate.keyWords).type(candidate.keyWords);
    cy.get(data.locatorsRecruitment.addCandidate.comments).type(candidate.comments);
    cy.get(data.locatorsRecruitment.addCandidate.consentCheckBox).check();
  }

  clickSave() {
    cy.get(data.locatorsRecruitment.addCandidate.saveButton).click();
  }
  
  searchNameCandidate(name){
    cy.get(data.locatorsRecruitment.candidateNameSearch).type(name).type('{enter}');
    cy.get(data.locatorsRecruitment.searchButton).click();
  }

  clickCandidate(name){
    cy.get(data.locatorsRecruitment.table.resultTable).find('td').contains(name).click();
  }
  
  downloadCV(){
    cy.get(data.locatorsRecruitment.addCandidate.downloadCV).click();
  }


}

export default new CandidatePage();