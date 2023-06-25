describe('HomePage', function () {
  it('shows all users table with fixture data', function () {
    cy.getUsers();
  });

  it('delete user', function () {
    cy.deleteUser();
  });

  it('shows all users after deleting', function () {
    cy.getUsers();
  });
});
