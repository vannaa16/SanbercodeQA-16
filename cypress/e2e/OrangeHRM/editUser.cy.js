import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('editUseronOrangeHRM', () => {
    const BaseLogin = new baseLogin()
        
    it('editUser berdasarkan User Role', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
        cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple:true})
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get('.oxd-button--secondary').click()
    })

    it('editUser berdasarkan Employee Name', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true})
        cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple:true})
        cy.get('.oxd-autocomplete-text-input > input').clear().type('Odis Adalwin')
        cy.get('.oxd-autocomplete-option').click()
        cy.get('.oxd-button--secondary').click()
    })
        
    it('editUser berdasarkan Status', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
        cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple:true})
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get('.oxd-button--secondary').click()
    })
        
    it('editUser berdasarkan Username', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
        cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple:true})
        cy.get(':nth-child(2) > .oxd-input').clear().type('komodo888')
        cy.get('.oxd-button--secondary').click()
    })

    it('editUser ubah password', () => {
        BaseLogin.visitPage()
        BaseLogin.inputUsername()
        BaseLogin.inputPassword()
        BaseLogin.clickLogin()
        BaseLogin.userPage()
        cy.get(':nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
        cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple:true})
        cy.get('.oxd-checkbox-input > .oxd-icon').click()
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('kompilasi000')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('kompilasi000')
        cy.get('.oxd-button--secondary').click()
    })
})