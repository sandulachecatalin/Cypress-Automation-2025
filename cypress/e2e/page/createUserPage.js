class CreateUserPage {

  elements = {
    loginOrRegisterBtn: () => cy.get('a[href*="account/login"]'),
    continueNewCustomerBtn: () => cy.get('#accountFrm fieldset .btn'),
    firstNameInput: () => cy.get('#AccountFrm_firstname'),
    lastNameInput: () => cy.get('#AccountFrm_lastname'),
    emailInput: () => cy.get('#AccountFrm_email'),
    telephoneInput: () => cy.get('#AccountFrm_telephone'),
    addressInput: () => cy.get('#AccountFrm_address_1'),
    cityInput: () => cy.get('#AccountFrm_city'),
    zoneSelect: () => cy.get('#AccountFrm_zone_id'),
    postcodeInput: () => cy.get('#AccountFrm_postcode'),
    countrySelect: () => cy.get('#AccountFrm_country_id'),
    usernameInput: () => cy.get('#AccountFrm_loginname'),
    passwordInput: () => cy.get('#AccountFrm_password'),
    confirmPasswordInput: () => cy.get('#AccountFrm_confirm'),
    agreeCheckbox: () => cy.get('#AccountFrm_agree'),
    continueBtn: () => cy.get('button[title="Continue"]'),
    successMessage: () => cy.contains('Your Account Has Been Created!')
  };

  visit() {
    cy.visit('https://automationteststore.com/');
  }

  goToLoginOrRegister() {
    this.elements.loginOrRegisterBtn().first().click();
  }

  clickContinueNewCustomer() {
    this.elements.continueNewCustomerBtn().click();
  }

  fillRegistrationForm(username, email, password) {
    this.elements.firstNameInput().type('Test');
    this.elements.lastNameInput().type('User');
    this.elements.emailInput().type(email);
    this.elements.telephoneInput().type('123456789');
    this.elements.addressInput().type('Test Street 123');
    this.elements.cityInput().type('TestCity');
    this.elements.zoneSelect().select('Aberdeen');
    this.elements.postcodeInput().type('12345');
    this.elements.countrySelect().select('United Kingdom');
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.confirmPasswordInput().type(password);
    this.elements.agreeCheckbox().check();
  }

  submitForm() {
    this.elements.continueBtn().click();
  }

  verifyAccountCreated() {
    this.elements.successMessage().should('exist');
  }

 saveUserToEnv(username, email, password) {
  Cypress.env('createdUser', username);
  Cypress.env('createdPassword', password);
}

  createNewUser(username, email, password) {
    this.visit();
    this.goToLoginOrRegister();
    this.clickContinueNewCustomer();
    this.fillRegistrationForm(username, email, password);
    this.submitForm();
    this.verifyAccountCreated();
    this.saveUserToEnv(username, email, password);
  }
}

export default new CreateUserPage();

//de creat selectorul pentru butonul de login or register si de folosit apoi in metoda