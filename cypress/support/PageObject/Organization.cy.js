const loginData = require("../../fixtures/OrangeHRM/F_Organization-riska.cy")

class baseLogin {
    Organization = '.--active > .oxd-topbar-body-nav-tab-item' //riska
    Locations = ':nth-child(2) > .oxd-topbar-body-nav-tab-link' // riska


    clickOrganization(){
        cy.klik(this.Organization)
    } //riska

    clickLocations(){
        cy.klik(this.Locations)
    } //riska




}
export default baseLogin;