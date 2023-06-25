describe('HomePage Component', function () {
  it('Shows all users table with users data', function () {
    cy.getUsers();
  });
});
