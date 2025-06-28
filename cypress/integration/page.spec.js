// cypress/integration/page.spec.js
describe('Page', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 30000 });
  });

  it('should render all the todos', () => {
    cy.get('.TodoInfo').should('have.length', 200);
    cy.get('.TodoInfo__title').should('have.length', 200);
  });

  it('should render todos in correct order', () => {
    cy.get('.TodoInfo').each(($todo, index) => {
      cy.wrap($todo)
        .find('.TodoInfo__title')
        .should('contain', `Task ${index + 1}`);
    });
  });

  it('should render corresponding users', () => {
    cy.get('.UserInfo').should('have.length', 200);
  });
});
