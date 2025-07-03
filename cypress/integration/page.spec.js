describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render all the todos', () => {
    cy.get('.TodoInfo').should('have.length', 200);
  });

  it('should render todos in correct order', () => {
    cy.get('.TodoInfo__title').eq(0).should('have.text', 'delectus aut autem');
    cy.get('.TodoInfo__title').eq(199).should('have.text', 'ipsam aperiam voluptates qui');
  });

  it('should render corresponding users', () => {
    cy.get('.UserInfo').eq(0).within(() => {
      cy.get('.UserInfo__name').should('have.text', 'Leanne Graham');
      cy.get('.UserInfo__email').should('have.attr', 'href', 'mailto:Sincere@april.biz');
    });

    cy.get('.UserInfo').eq(199).within(() => {
      cy.get('.UserInfo__name').should('have.text', 'Clementina DuBuque');
      cy.get('.UserInfo__email').should('have.attr', 'href', 'mailto:Rey.Padberg@karina.biz');
    });
  });
})