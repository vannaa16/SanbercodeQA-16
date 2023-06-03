import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Users', () => {
  const BaseLogin = new baseLogin()

  it('success Verifikasi Menu Users dapat diakses ', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    cy.get('.oxd-topbar-header-breadcrumb-level').should('be.visible')
   
  })

  it('success Verifikasi Berhasil Search Username ', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    cy.get('.oxd-topbar-header-breadcrumb-level').should('be.visible')
    BaseLogin.searchUsername()
    cy.get(':nth-child(3) > .oxd-icon-button').should('be.visible').click({force:true});
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible')

  })

  it('success Verifikasi Berhasil Search User Role ', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force:true})
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible')
  })

  it('success Verifikasi Berhasil Search Employee Name ', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    cy.get('.oxd-autocomplete-text-input > input').type("Odis Adalwin")
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible')
  })

  it('success Verifikasi Berhasil Search Status', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force:true})
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible')
  })


  it('success Verifikasi Reset', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    BaseLogin.searchUsername()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force:true})
    cy.get('.oxd-button--ghost').click({force:true});
    cy.get(':nth-child(2) > .oxd-input').should('be.empty')
    
  })

})