/// <reference types="@cypress/xpath" />
class NobiLogin_PO {
  VisitNobi(site) {
    cy.visit(Cypress.env(site), { failOnStatusCode: false });
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log("Cypress detected uncaught exception: ", err);
      return false;
    });
  }

  /**
   * @description Login to Nobi
   * @param {string} Email Provide a valid email address
   * @param {string} Password Provide a valid password
   */
  LoginData(Email, Password) {
    if (Email !== null) {
      cy.get("#user_email").click().type(Email);
      cy.get("#user_email").should("have.value", Email);
    }

    if (Password !== null) {
      cy.get("#user_password").click().type(Password);
      cy.get("#user_password").should("have.value", Password);
    }
  }

  /**
   * @description Click Sign In
   */
  SignIn() {
    cy.get("#sign_in_btn").click();
  }

  /**
   * @description Reset the password
   */
  ForgotPassword(PwdToReset = "demodemo@nobi.life") {
    cy.get(".btn").contains("Forgot password").click();
    cy.get("#user_email").click();
    cy.get("#user_email").type(PwdToReset);
    cy.get(".btn").contains("Reset password").click();
  }

  /**
   * @description Add a new family
   */
  addNewFamily() {
    cy.get(".btn").contains("New family").click();
  }

  /**
   * @description Add user information for family
   * @param {string} FirstName Provide a user first name
   * @param {string} LastName Provide a user last name
   * @param {string} Email Provide a user email
   * @param {string} Pwd provide a password for the user
   */
  UserInformation(FirstName, LastName, Email, Pwd) {
    if (FirstName !== null) {
      cy.get("#user_first_name").click().type(FirstName);
    }
    if (LastName !== null) {
      cy.get("#user_last_name").type(LastName);
    }
    if (Email !== null) {
      cy.get("#user_email").type(Email);
    }
    if (Pwd !== null) {
      cy.get("#user_password").click().type(Pwd);
    }
    cy.get(".btn").contains("Sign up").click();
  }

  /**
   * @description Verification Message and close popup
   * @param {string} Msg Message after actions which can be errors or valid messages
   */
  MsgBox(Msg) {
    cy.get("[data-notify='message']").should("have.text", Msg);
    cy.get(".close").click();
  }

  /**
   * @description Go to the desired page via the menu
   * @param {string} Menu Open the menu and select the appropriate option on the left menu
   * @param {string} typeOfUser For users there is Management or Organisation, for remaining it is null
   */
  Menu(Menu, typeOfUser = 0) {
    // Check if the #sidebar element is visible
    cy.get("#sidebar").then(($sidebar) => {
      if ($sidebar.is(":visible")) {
        // If the #sidebar is visible, you can perform additional actions here
        // ...
      } else {
        // If the #sidebar is not visible, you can perform actions like clicking the #sidebar_toggle
        cy.get("#sidebar_toggle").click();
      }
    });

    if (typeOfUser == "Management") {
      cy.get("#users").contains(Menu).click();
    }

    if (typeOfUser == "Organisation") {
      cy.get("#account_users").contains(Menu).click();
    }

    if (typeOfUser == 0) {
      cy.get(".nav-main-link-name").contains(Menu).click({ force: true });
    }
  }
}

export default NobiLogin_PO;
