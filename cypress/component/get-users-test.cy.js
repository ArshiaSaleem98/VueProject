describe('HomePage Component', function () {
  beforeEach(function () {
    cy.setupFixture();
  });

  it('Shows user table with fixture data', function () {
    cy.showTable();
  });
});
