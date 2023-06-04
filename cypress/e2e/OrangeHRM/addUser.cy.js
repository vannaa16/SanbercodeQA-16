import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('addUseronOrangeHRM', () => {
    const BaseLogin = new baseLogin() 
        
    it('addUser', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        //cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        cy.get('.oxd-select-dropdown.--positon-bottom').click()
        cy.get('.oxd-autocomplete-text-input > input').type('Paul')
        cy.wait(4000)
        cy.get('.oxd-autocomplete-dropdown.--positon-bottom').click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        cy.get('.oxd-select-dropdown.--positon-bottom').click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('cilioil090').should('be.visible')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('komporgas123')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('komporgas123')
        cy.get('.oxd-button--secondary').should('be.visible').click({force:true})
    })
  })
