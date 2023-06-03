import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Admin-Organization', () => {
  const BaseLogin = new baseLogin()

  it('Search info locations by NAME Successfully ', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickAdminMenu()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    cy.get('.oxd-topbar-header-breadcrumb-level').should('be.visible')
    BaseLogin.clickOrganization()
    BaseLogin.clickLocations()

    
    //cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    
   
  })

})