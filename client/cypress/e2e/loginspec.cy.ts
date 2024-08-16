describe('Tentar fazer login com credenciais válidas', () => {
    it('Deve fazer login com credenciais válidas', () => {
      cy.visit('/heroes')
      cy.get('li > .undefined').click()
      cy.get('[name="email"]').type("admin@test.com")
      cy.get('[name="password"]').type("test123")
      cy.get('.text-white').click()
    });
  });