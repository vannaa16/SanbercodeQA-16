import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Admin-Organization', () => {
  const BaseLogin = new baseLogin()



it('TC07 - Add Location Failed', () => {
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
  cy.get('.orangehrm-header-container > div > .oxd-button').click()
  cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Qandahar") //city
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("12000") //zip-postalcode
  cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type("081112345678") //phone
  cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Sana Sini Street") //address
  cy.get('.oxd-select-text--after > .oxd-icon').click({force:true}) //country
  cy.get('.oxd-select-dropdown > :nth-child(2) > span').click() //country
  cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type("0101010101") //fax
  cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("near hospital")//notes
  cy.get('.oxd-button--secondary').should('be.visible').click()
  cy.get('.oxd-input-group > .oxd-text').should('contain.text','Required')
  //cy.get('.oxd-toaster_1').should('contain.text','Successfully Saved')
})

it.only('TC08 - Add Location Succesfully', () => {
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
  cy.get('.orangehrm-header-container > div > .oxd-button').click()
  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Aisyah") //nama
  cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Kabul") //city
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("12000") //zip-postalcode
  cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type("081112345678") //phone
  cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Sana Sini Street") //address
  cy.get('.oxd-select-text--after > .oxd-icon').click({force:true}) //country
  cy.get('.oxd-select-dropdown > :nth-child(2) > span').click() //country
  cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type("0101010101") //fax
  cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("near hospital")//notes
  cy.get('.oxd-button--secondary').should('be.visible').click()
  //cy.get('.orangehrm-container').should('contain.text','Aisyah')
})

})