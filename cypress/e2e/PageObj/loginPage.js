const data = require("../../fixtures/loginUser.json");

class loginPage {
  elements = {
    loginTitle: () => cy.get(".oxd-text--h5"),
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMsg: () => cy.get('div[role="alert"]'),
    emptyUsernameFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    emptyPasswordFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    forgotPasswordBtn: () => cy.contains("Forgot your password?"),
    dropdownAboutAlert: () => cy.get(".orangehrm-modal-header > .oxd-text"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickForgotPasswordBtn() {
    this.elements.forgotPasswordBtn().click();
  }

  getErrorMsg() {
    this.elements.errorMsg(data.expected);
  }
}

module.exports = new loginPage();
