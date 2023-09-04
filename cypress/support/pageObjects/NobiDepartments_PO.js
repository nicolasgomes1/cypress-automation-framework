class NobiDepartments_PO {
    adddepartment() {
        cy.get("#add_department").click();
    }

    adddepartmentinfo(wifisecurity) {
        cy.get('#department_name').type("My Second Department")
        cy.get('#department_name').should("have.value", "My Second Department");
        cy.get('#department_connection_attributes_wifi_security_type').select(wifisecurity)
        cy.get('#department_connection_attributes_wifi_security_type').should("contain", wifisecurity);
    }

    addwifisecurityinfo(wifisecurity, ssid, pwd = 0, username = 0) {
        if (wifisecurity === "Open network") {
            cy.get("#department_connection_attributes_wifi_ssid").click().type(ssid)
            

        } else if (wifisecurity === "WPA Personal")  {

            cy.get("#department_connection_attributes_wifi_password").click().type(ssid)
        
            cy.get("#department_connection_attributes_wifi_password").click().type(pwd)

        } else if (wifisecurity === "WPA Enterprise"){
            cy.get("#department_connection_attributes_wifi_ssid").click().type(ssid)
            cy.get("#department_connection_attributes_wifi_username").click().type(username)
            cy.get("#department_connection_attributes_wifi_password").click().type(pwd)
            
        }
    }

    savedepartment() {
        cy.get("#submit_btn").click();
    }

}

export default NobiDepartments_PO