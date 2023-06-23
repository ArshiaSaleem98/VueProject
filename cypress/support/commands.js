import HomePage from '../../src/views/HomePage/HomePage';
import './commands';

Cypress.Commands.add('setupFixture', () => {
  cy.fixture('mock-user-data.json').as('usersData');
  cy.viewport(2000, 2000);
  Cypress.env('USE_FIXTURE', true);

  cy.intercept('GET', 'http://localhost:8080/webdev/api/users', {
    fixture: 'mock-user-data.json',
  }).as('getUsers');
});

Cypress.Commands.add('showTable', () => {
  cy.fixture('mock-user-data.json').as('usersData');

  cy.mount(HomePage);

  // Access the fixture data using the alias
  cy.get('@usersData').then((users) => {
    cy.get('.all-user-table')
      .find('.all-user-table__responsive')
      .should('exist');

    cy.get('.all-user-table')
      .find('tbody > tr')
      .should('have.length', users.length);
  });
});

Cypress.Commands.add('createUser', () => {
  cy.fixture('mock-user-data.json').then((users) => {
    const newUser = {
      id: 57,
      name: 'Mark',
      cc: 'SP',
      'modified-by': '',
      'updated-ts': '',
    };

    cy.mount(HomePage);

    cy.get('.btn.btn-primary.add-new-user-button')
      .first()
      .click({ force: true });
    cy.get('#name').type(newUser.name);
    cy.get('#cc').select(newUser.cc);
    cy.get('.btn.btn-primary[type="submit"]').click();
    users.push(newUser);
    cy.writeFile('cypress/fixtures/mock-user-data.json', users);
  });
});
