import CreateUserPage from '../page/createUserPage';
import { faker } from '@faker-js/faker';

describe('Create User - POM', () => {
  it('creates a new user account and saves it to a file', () => {
    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = 'Password123!';

    // Creează userul
    CreateUserPage.createNewUser(username, email, password);

    // Salvează-l într-un fișier, ca să-l putem folosi ulterior
    cy.writeFile('cypress/fixtures/user.json', {
      username,
      password,
      email,
    });

    cy.log('User created and saved to cypress/fixtures/user.json');
  });
});


//sa foloseasca user-ul creat in login -> de updatat (env variables) 
// cypress.env pt user de setat 
