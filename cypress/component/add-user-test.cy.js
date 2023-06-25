describe('HomePage', function () {
  it('shows all users table with fixture data', function () {
    cy.getUsers();
  });

  it('creates a new user', function () {
    cy.createUser();
  });

  it('displays users table after adding', function () {
    cy.getUsers();
  });
});
