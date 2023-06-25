import HomePage from '../../src/views/HomePage/HomePage';
import './commands';

Cypress.Commands.add('getUsers', () => {
  cy.viewport(2000, 2000);
  Cypress.env('isTesting', true);
  cy.mount(HomePage);
  cy.get('.all-user-table').find('.all-user-table__responsive').should('exist');
});

Cypress.Commands.add('createUser', () => {
  Cypress.env('isTesting', true);

  const newUser = {
    id: 57,
    name: 'Mark',
    cc: 'SP',
    'modified-by': '',
    'updated-ts': '',
  };

  cy.mount(HomePage);

  cy.get('.btn.btn-primary.add-new-user-button').first().click({ force: true });
  cy.get('#name').type(newUser.name);
  cy.get('#cc').select(newUser.cc);
  cy.get('.btn.btn-primary[type="submit"]').click();
});

Cypress.Commands.add('editUser', () => {
  cy.mount(HomePage);
  const userIdToEdit = 150;
  const newName = 'John Doe';
  Cypress.env('userIdToEdit', userIdToEdit);

  cy.get(`button[data-id="${userIdToEdit}"][class="btn btn-primary"]`)
    .first()
    .should('exist')
    .click();

  cy.get(`input[data-id="${userIdToEdit}-name"]`).clear();
  cy.get(`input[data-id="${userIdToEdit}-name"]`).type(newName);

  cy.get(`button[data-id="${userIdToEdit}"][class="btn btn-success"]`)
    .first()
    .should('exist')
    .click();

  cy.get('.all-user-table__responsive .table tbody')
    .find(`tr[data-key="${userIdToEdit}"]`)
    .within(() => {
      cy.get(`input[data-id="${userIdToEdit}-name"]`)
        .should('be.visible')
        .should('have.value', newName);
    });
});

Cypress.Commands.add('deleteUser', () => {
  cy.mount(HomePage);
  const userIdToDelete = 149;

  Cypress.env('userDeleteId', userIdToDelete);

  cy.get(`button[data-id="${userIdToDelete}"][class="btn btn-danger"]`)
    .should('exist')
    .click();

  cy.get('.all-user-table__responsive .table tbody')
    .find(`tr[data-key="${userIdToDelete}"]`)
    .should('not.exist');
});
