import HomePage from '../../src/views/HomePage/HomePage';

describe('HomePage Component', function () {
  beforeEach(function () {
    cy.fixture('mock-user-data.json').as('usersData');
    cy.viewport(2000, 2000);
    Cypress.env('USE_FIXTURE', true);

    cy.intercept('GET', 'http://localhost:8080/webdev/api/users', {
      fixture: 'mock-user-data.json', // Path to the fixture file
    }).as('getUsers');
  });

  it('displays user table with fixture data', function () {
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
});
