class NobiResidents_PO {
  addResident() {
    cy.get("#add_resident").click();
  }

  /**
   * @param {string} firstname Add the First Name
   * @param {string} lastname Add the last name
   * @param {string} callname Add callName
   * @param {string} birthdate Add birthdate
   * @param {string} sex Select Male or Female
   * @param {string} language Select the prefered language
   * @param {string} housingunit To which Housing unit will the resident be attached
   */
  addResidentInfo(
    firstname,
    lastname,
    callname,
    birthdate,
    sex,
    language,
    housingunit
  ) {
    if (firstname !== null) {
      cy.get("#resident_first_name").type(firstname);
      cy.get("#resident_first_name").should("have.value", firstname);
    }
    if (lastname !== null) {
      cy.get("#resident_last_name").type(lastname);
      cy.get("#resident_last_name").should("have.value", lastname);
    }
    if (callname !== null) {
      cy.get("#resident_call_name").type(callname);
      cy.get("#resident_call_name").should("have.value", callname);
    }
    if (birthdate !== null) {
      cy.get("#resident_birthdate").type(birthdate);
      cy.get("#resident_birthdate").should("have.value", birthdate);
    }
    if (sex !== null) {
      cy.get("#resident_gender").select(sex);
    }
    if (language !== null) {
      cy.get("#resident_language").select(language);
    }
    if (housingunit !== null) {
      cy.get("#resident_housing_unit_id").select(housingunit);
    }
  }

  saveResident() {
    cy.get("#submit_btn").click();
  }
}

export default NobiResidents_PO;
