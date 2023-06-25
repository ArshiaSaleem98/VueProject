describe('HomePage', function () {
  it('shows all users table with fixture data', function () {
    cy.getUsers();
  });

  it('edit', function () {
    cy.editUser();
  });

  it('shows all users table after editing the user', function () {
    cy.getUsers();
  });
});
