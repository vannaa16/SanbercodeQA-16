import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Admin-Organization', () => {
  const BaseLogin = new baseLogin()

  it.only('TC09 - Edit Location Successfully', () => {
    BaseLogin.visitPage()
    cy.contains("Login")
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    cy.contains("Dashboard")
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.contains("Organization")
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.contains("Locations")
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aisyah').clear()
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Aisyah Putri")
    cy.get('.oxd-button--secondary').should('be.visible').click()
    cy.get('.orangehrm-container').should('contain.text','Aisyah Putri')
  })

  it.only('TC10 - Edit Location Successfully', () => {
    BaseLogin.visitPage()
    cy.contains("Login")
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    cy.contains("Dashboard")
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.contains("Organization")
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.contains("Locations")
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aisyah Putri').clear()
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Aisyah Hasanah")
    cy.get('.oxd-button--ghost').click()

  })




})