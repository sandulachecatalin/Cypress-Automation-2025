import LoginPage from "../page/loginPage";

describe('Login', () => {
  const loginPage = new LoginPage();

  it('logs in using the user saved in user.json', () => {
    // Citește datele userului create anterior
    cy.readFile('cypress/fixtures/user.json').then((user) => {
      loginPage.goToLoginPage();
      loginPage.fillForm(user.username, user.password);
      loginPage.submit();

      // verificare login
      cy.contains('My Account').should('exist');
    });
  });
});

//o functie in pagina pentru a merge pe pagina de login
//de adaugat assertion simplu - se va pune in fisierul de test
//create_user de transformat in POM

//sa conectez contul de copilot cu github
//aici trebuie sa preiau valoarea din cypress.env
//o apelez cu cypress.env('name')