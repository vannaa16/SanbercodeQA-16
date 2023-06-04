import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Admin-Organization', () => {
  const BaseLogin = new baseLogin()

  it('TC08 - Add Location Succesfully ', () => {
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

})