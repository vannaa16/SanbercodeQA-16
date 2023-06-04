import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Admin-Organization', () => {
  const BaseLogin = new baseLogin()

  it('Search info locations by NAME Successfully ', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
    
    //cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    
   
  })

})