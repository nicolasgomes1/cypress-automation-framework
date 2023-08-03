class Contact_Us_PO {

        ContactForm_Submission(firstName, lasName, email, comment, $selector, textToLocate) {
          cy.get('[name="first_name"]').type(firstName);
          cy.get('[name="last_name"]').type(lasName);
          cy.get('[name="email"]').type(email);
          cy.get("textarea.feedback-input").type(comment);
          cy.get('[type="submit"]').click();
          cy.get($selector).contains(textToLocate, {timeout: 60000});
        }
}

export default Contact_Us_PO;