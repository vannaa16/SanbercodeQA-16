import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Logout', () => {
  const BaseLogin = new baseLogin()

  it('success logout', () => {
    BaseLogin.visitPage()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validatePageDashboard()
    BaseLogin.clickUserDropdown()
    BaseLogin.clickLogout()
    BaseLogin.validateSuccessLogout()

   
  })
})