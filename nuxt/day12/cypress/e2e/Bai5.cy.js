describe('Bai5 Page', () => {
  it('should load the home page', () => {
      cy.visit('http://localhost:3000/bai5');
      cy.contains('Bài 5'); 
      cy.contains('Chào mừng bạn đến với bài 5!');
  });

  it('should load the lazy-loaded component', () => {
      cy.visit('http://localhost:3000/bai5');
      cy.get('h2').contains('This is my lazy-loaded component!'); 
  });
});
