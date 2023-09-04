class NobiUsers_PO {
  /**
   * @description Add a new user
   */
  adduser() {
    cy.get("#add_user").click();
  }

  /**
   * @param {string} Email The email of the user to which the invitation will be sent
   * @param {string} FirstName The first name of the invited user
   * @param {string} LastName The last name of the invited user
   * @param {string} Language Ther user prefered language
   * @param {string} Role The role of the user (Manager or User)
   * @param {string} Phone The valid phone number of the user
   */
  addUserInfo(Email, FirstName, LastName, Language, Role, Phone) {
    if (Email !== null) {
      cy.get("#users_invitation_email").click().type(Email);
      cy.get("#users_invitation_email").should("have.value", Email);
    }

    if (FirstName !== null) {
      cy.get("#users_invitation_first_name").click().type(FirstName);
      cy.get("#users_invitation_first_name").should("have.value", FirstName);
    }

    if (LastName !== null) {
      cy.get("#users_invitation_last_name").click().type(LastName);
      cy.get("#users_invitation_last_name").should("have.value", LastName);
    }

    if (Language !== null) {
      cy.get("#users_invitation_language").select(Language);
      cy.get("#users_invitation_language")
        .find("option:selected")
        .should("have.text", Language);
    }

    if (Role !== null) {
      cy.get("#users_invitation_role")
        .select(Role)
        .find("option:selected")
        .should("have.text", Role);
    }

    if (Phone !== null) {
      cy.get("#users_invitation_phone").click().type(Phone);
      cy.get("#users_invitation_phone").should("have.value", Phone);
    }

    cy.get("#submit_btn").click();
  }
}

export default NobiUsers_PO;
