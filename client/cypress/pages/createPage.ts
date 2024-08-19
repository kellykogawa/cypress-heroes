const { passCommandToAction } = require("commander");

class CreatePage {
  selectorsList() {
    const selectors = {
      createButton: "a > .undefined",
      nameField: "[data-cy='nameInput']",
      priceField: "[data-cy='priceInput']",
      fansField: "[data-cy='fansInput']",
      savesField: "[data-cy='savesInput']",
      powerSelection: "[data-cy='powersSelect']",
      submitButton: ".items-center"
    };

    return selectors;
  }

  accessCreatePage() {
    cy.get(this.selectorsList().createButton).click();
    cy.location('pathname').should('equal', '/heroes/new');
  }

  createAnyHero() {
    cy.get(this.selectorsList().nameField).type('Super Mind');
    cy.get(this.selectorsList().priceField).type('79');
    cy.get(this.selectorsList().fansField).type('55');
    cy.get(this.selectorsList().savesField).type('76');
    cy.get(this.selectorsList().powerSelection).select('Mind Control');
    cy.get(this.selectorsList().submitButton).eq(2).click()
  }

}

export default CreatePage;
