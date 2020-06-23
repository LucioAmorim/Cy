
describe('Teste Twygo', () => {
  it('Cadastro de Usuário no Twygo', () => {    
    cy.visit("https://www.twygoead.com/users/login")
    cy.get('#user_email').type('clubinhodasletras@gmail.com')
    cy.get('#user_password').type('knight8497')
    cy.get('#user_submit').click()
    cy.get('.top-user-name > .btn').click()
    cy.get('.item-admin').click()
    cy.get('.menu-main > :nth-child(4) > .menu-target').click()
    cy.get('#add-professional').click()
    cy.get('#professional_first_name').type('Clubinho')
    cy.get('#professional_last_name').type('Das Letras')
    cy.get('#professional_email').type('Clubinho@gmail.com')
    cy.get('.save').click()
    cy.get('#flash_0').should('be.visible')  
  })
})    