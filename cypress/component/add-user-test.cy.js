import '../support/commands';

describe('HomePage', function () {
  beforeEach(function () {
    cy.setupFixture();
  });

  it('shows all users table with fixture data', function () {
    cy.showTable();
  });

  it('creates a new user', function () {
    cy.createUser();
  });

  it('displays user with fixture data', function () {
    cy.showTable();
  });
});
