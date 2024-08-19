describe('Tentar criar novo herói', () => {
  it('Deve ser possível criar um novo herói', () => {
    cy.visit('/heroes')
    cy.get('li > .undefined').click()
    cy.get('[name="email"]').type("admin@test.com")
    cy.get('[name="password"]').type("test123")
    cy.get('.text-white').click()
    cy.get('a > .undefined').click()
    cy.get('[data-cy="nameInput"]').type('Master Hero')
    cy.get('[data-cy="priceInput"]').type('278')
    cy.get('[data-cy="fansInput"]').type('25')
    cy.get('[data-cy="savesInput"]').type('1000')
    cy.get('[data-cy="powersSelect"]').select('Mind Control')
    cy.get('[data-cy="avatarFile"]').click({force: true})
    cy.get('.items-center').eq(2).click()
  });
});