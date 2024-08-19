const { passCommandToAction } = require("commander");

class LoginPage {
  selectorsList() {
    const selectors = {
      loginButton: "li > .undefined",
      emailField: "[name='email']",
      passwordField: "[name='password']",
      wrongCredentialAlert: ".text-red-500",
      signinButton: ".text-white"
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/heroes");
    cy.get(this.selectorsList().loginButton).click({force: true});
  }

  loginWithAnyUser(email: string, password: string) {
    cy.get(this.selectorsList().emailField).type(email);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().signinButton).click({force: true});
  }

  checkInvalidEmail() {
    cy.get(this.selectorsList().wrongCredentialAlert);
    cy.get('body').should('contain', 'Email is not valid')
  }

  checkInvalidCredentials() {
    cy.get(this.selectorsList().wrongCredentialAlert);
    cy.get('body').should('contain', 'Invalid email or password')
  }
}

export default LoginPage;
