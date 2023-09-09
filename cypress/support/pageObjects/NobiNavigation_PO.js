class NobiNavigation_PO {
  /**
   *
   * @param {string} MainMenu Top Menu to be selected
   * @param {string} id the id of the suboptions to be clicked # included
   */
  ExpandMenu(MainMenu, id) {
    cy.get("#tabs")
      .contains(MainMenu)
      .trigger("mouseover")
      .then(() => {
        cy.get(`#${id} .menu`).invoke("show").should("be.visible");
      });
  }
}

export default NobiNavigation_PO;
