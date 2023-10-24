describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render all the todos', () => {
    cy.get('.TodoInfo').should('have.length', 200);
  });

  it('should render todos in correct order', () => {
    cy.get('.TodoInfo__title').eq(0).should('have.text', 'delectus aut autem');
    cy.get('.TodoInfo__title').eq(199).should('have.text',
      'ipsam aperiam voluptates qui');
  });

  it('should render corresponding users', () => {
    cy.get('.UserInfo').should('have.length', 200);

    cy.get('.UserInfo').eq(0).should('have.text', 'Leanne Graham');
    cy.get('.UserInfo').eq(199).should('have.text', 'Clementina DuBuque');
  });
});
