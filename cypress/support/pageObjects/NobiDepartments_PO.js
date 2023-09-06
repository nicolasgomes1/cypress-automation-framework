class NobiDepartments_PO {
  addDepartment() {
    cy.get("#add_department").click();
  }

  /**
   * @param {string} department provide a department name
   */
  addDepartmentInfo(department) {
    cy.get("#department_name").type(department);
    cy.get("#department_name").should("have.value", department);
  }

  addWifiSecurityInfo(wifisecurity, ssid, pwd = 0, username = 0) {
    cy.get("#department_connection_attributes_wifi_security_type").select(
      wifisecurity
    );
    cy.get("#department_connection_attributes_wifi_security_type").should(
      "contain",
      wifisecurity
    );

    if (wifisecurity === "Open network") {
      cy.get("#department_connection_attributes_wifi_ssid").click().type(ssid);
      cy.log(wifisecurity);
    } else if (wifisecurity === "WPA Personal") {
      cy.get("#department_connection_attributes_wifi_password")
        .click()
        .type(ssid);

      cy.get("#department_connection_attributes_wifi_password")
        .click()
        .type(pwd);
      cy.log(wifisecurity);
    } else if (wifisecurity === "WPA Enterprise") {
      cy.get("#department_connection_attributes_wifi_ssid").click().type(ssid);
      cy.get("#department_connection_attributes_wifi_username")
        .click()
        .type(username);
      cy.get("#department_connection_attributes_wifi_password")
        .click()
        .type(pwd);
      cy.log(wifisecurity);
    }
  }

  saveDepartment() {
    cy.get("#submit_btn").click();
  }
}

export default NobiDepartments_PO;
