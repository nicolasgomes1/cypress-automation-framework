//comments
describe("hooks", function () {
  before(function () {
    cy.log('runs once before the first test in this block')
  });

  after(function () {
    cy.log('runs once after the last test in this block')
  });

  beforeEach(function () {
    cy.log('runs before each test in this block')
  });

  afterEach(function () {
    cy.log('runs after each test in this block')
  });

  it('Example test1', () => {
     cy.log('Example test1!')
  });

  it('Example test2', () => {
    cy.log('Example test2!')
 });
});
