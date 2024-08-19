describe('Tentar fazer login com credenciais válidas', () => {
    it('Deve fazer login com credenciais válidas', () => {
      cy.visit('/heroes')
      cy.get('li > .undefined').click()
      cy.get('[name="email"]').type("admin@test.com")
      cy.get('[name="password"]').type("test123")
      cy.get('.text-white').click()
    });
  });


  describe('Tentar fazer login com email inválido', () => {
    it('Deve aparecer alerta que o email é inválido', () => {
      cy.visit('/heroes')
      cy.get('li > .undefined').click()
      cy.get('[name="email"]').type("test")
      cy.get('[name="password"]').type("test")
      cy.get('.text-white').click()
      cy.get('.text-red-500')
        cy.get('body').should('contain', 'Email is not valid')
    });
  });


  describe('Tentar fazer login com credenciais inválidas', () => {
    it.only('Deve aparecer alerta que as credenciais são inválidas', () => {
      cy.visit('/heroes')
      cy.get('li > .undefined').click()
      cy.get('[name="email"]').type("test@gmail.com")
      cy.get('[name="password"]').type("test")
      cy.get('.text-white').click()
      cy.get('.text-red-500')
        cy.get('body').should('contain', 'Invalid email or password')
    });
  });