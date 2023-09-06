class NobiHousingUnits_PO {
  addHousingUnit() {
    cy.get("#add_housing_unit").click();
  }

  /**
   *
   * @param {string} housingunit add a housing unit name
   */
  addHousingUnitInfo(housingunit, department) {
    cy.get("#housing_unit_name").type(housingunit);
    cy.get("#housing_unit_name").should("have.value", housingunit);

    cy.get("#housing_unit_managable_id").select(department);
  }

  addWifiSecurityInfo(wifisecurity, ssid, pwd = 0, username = 0) {
    cy.get("#housing_unit_connection_attributes_wifi_security_type").select(
      wifisecurity
    );
    cy.get("#housing_unit_connection_attributes_wifi_security_type").should(
      "contain",
      wifisecurity
    );

    if (wifisecurity === "Open network") {
      cy.get("#housing_unit_connection_attributes_wifi_ssid")
        .click()
        .type(ssid);
      cy.log(wifisecurity);
    } else if (wifisecurity === "WPA Personal") {
      cy.get("#housing_unit_connection_attributes_wifi_ssid")
        .click()
        .type(ssid);

      cy.get("#housing_unit_connection_attributes_wifi_password")
        .click()
        .type(pwd);
      cy.log(wifisecurity);
    } else if (wifisecurity === "WPA Enterprise") {
      cy.get("#housing_unit_connection_attributes_wifi_ssid")
        .click()
        .type(ssid);
      cy.get("#housing_unit_connection_attributes_wifi_username")
        .click()
        .type(username);
      cy.get("#housing_unit_connection_attributes_wifi_password")
        .click()
        .type(pwd);
      cy.log(wifisecurity);
    }
  }

  saveHousingUnit() {
    cy.get("#submit_btn").click();
  }
}

export default NobiHousingUnits_PO;
