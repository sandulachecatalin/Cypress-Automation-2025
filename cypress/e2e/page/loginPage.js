class LoginPage {
  elements = {
    username: () => cy.get('#loginFrm_loginname'),
    password: () => cy.get('#loginFrm_password'),
    loginButton: () => cy.get('button[title="Login"]'),
  };

  // Navighează la pagina de login
  goToLoginPage() {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
  }

  // Completează formularul
  fillForm(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
  }

  // Apasă pe butonul de login
  submit() {
    this.elements.loginButton().click();
  }
}

export default LoginPage;
