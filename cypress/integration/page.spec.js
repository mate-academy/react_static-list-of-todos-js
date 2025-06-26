describe('Page', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
  });

  it('should render all the todos', () => {
    cy.get('.TodoInfo').should('have.length', 200);
    cy.get('.TodoInfo__title').should('have.length', 200);
  });

  it('should render todos in correct order', () => {
    cy.get('.TodoInfo__title').each(($el, index) => {
      cy.wrap($el).should('contain', `Task ${index + 1}`);
    });
  });

  it('should render corresponding users', () => {
    cy.get('.UserInfo').should('have.length', 200);
  });
});
