import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Admin-Organization', () => {
  const BaseLogin = new baseLogin()

  it('TC01 - Verify info locations by NAME Successfully', () => {
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
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Aisyah") //Isi Name
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true})
    cy.contains("Record Found")
   
  })

  it('TC02 - Verify info locations by CITY Successfully', () => {
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
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Kabul") //Isi City
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true})
    cy.contains("Record Found")
   
  })

  it('TC03 - Verify info locations by COUNTRY Successfully', () => {
    BaseLogin.visitPage()
    cy.contains("Login")
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    cy.contains("Dashboard")
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.contains("Organization")
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //>organization
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click() //>location
    cy.get('.oxd-select-text--after > .oxd-icon').click({force:true})
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
  })

  it('TC04 - Verify info locations by Name, City, Country Successfully', () => {
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
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Aisyah") //Isi Name
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Kabul")//Isi city
    cy.get('.oxd-select-text--after > .oxd-icon').click({force:true})
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true});
  })

  it('TC05 - Verify info locations by City Failed', () => {
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
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jakarta") //Isi City
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force:true})
    cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain.text','No Records Found')
   
  })


  it('TC06 - Verify when Reset Success', () => {
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
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Aisyah") //Isi Name
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Kabul")//Isi city
    cy.get('.oxd-button--ghost').click({force:true});
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.empty')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.empty')
  })

})