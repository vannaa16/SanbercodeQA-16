import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('deleteUseronOrangeHRM', () => {
    const BaseLogin = new baseLogin() 
        
    it('deleteUser berdasarkan ikon sampah', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
        cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({multiple:true})
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
    })

    it('deleteUser berdasarkan cengtang Rocord Found', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
        cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({multiple:true})
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
      })
  

})