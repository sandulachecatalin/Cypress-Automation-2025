// createUser.cy.js
describe('Create User', () => {
  it('creates a new user account', () => {
    const username = 'Testusers123';
    const email = 'testusers123@mail.com';
    const password = 'Password123!';

    cy.visit('https://automationteststore.com/');
    cy.contains('Login or register').click();
    cy.get('#accountFrm > fieldset > .btn').click(); // "Continue" for new customer

    cy.get('#AccountFrm_firstname').type('Test');
    cy.get('#AccountFrm_lastname').type('User');
    cy.get('#AccountFrm_email').type(email);
    cy.get('#AccountFrm_telephone').type('123456789');
    cy.get('#AccountFrm_address_1').type('Test Street 123');
    cy.get('#AccountFrm_city').type('TestCity');
    cy.get('#AccountFrm_zone_id').select('Aberdeen');
    cy.get('#AccountFrm_postcode').type('12345');
    cy.get('#AccountFrm_country_id').select('United Kingdom');
    cy.get('#AccountFrm_loginname').type(username);
    cy.get('#AccountFrm_password').type(password);
    cy.get('#AccountFrm_confirm').type(password);
    cy.get('#AccountFrm_agree').check();

    cy.get('button[title="Continue"]').click();

    cy.contains('Your Account Has Been Created!').should('exist');
  });
});