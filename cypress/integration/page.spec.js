describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render all the todos', () => {
    cy.get('.TodoInfo').should('have.length', 2);
  });

  it('should render todos in correct order', () => {
    cy.get('.TodoInfo__title').eq(0).should('have.text', 'delectus aut autem');
    cy.get('.TodoInfo__title').eq(1).should('have.text', 'quis ut nam facilis et officia qui');
  });

  it('should render corresponding users', () => {
  cy.get('.UserInfo').should('have.length', 2);

  cy.get('.UserInfo').eq(0).should('contain.text', 'Leanne Graham');
  cy.get('.UserInfo').eq(0).find('a').should('have.attr', 'href', 'mailto:Sincere@april.biz');

  cy.get('.UserInfo').eq(1).should('contain.text', 'Clementine Bauch');
  cy.get('.UserInfo').eq(1).find('a').should('have.attr', 'href', 'mailto:Nathan@yesenia.net');
});

});
