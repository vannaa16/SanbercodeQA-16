const loginData = require("../../fixtures/OrangeHRM/logininput.json")

class baseLogin {
    userPage = ':nth-child(1) > .oxd-main-menu-item > .oxd-text' //dinarjy

    clickUserPage(){
        cy.klik(this.userPage) 
    } // by dinarjy
}