import env from '../../support/enviroments'
import user from '../../support/users'
import login_locator from '../../support/login_locators'
import menu from '../../support/menu_locators'
import usuarios from '../../support/users_locators'
import flash_msg from '../../support/flash_msg_locators'
describe('Teste Twygo Refatorado', () => {
  beforeEach(function() {
    cy.login(env.PROD, user.ADMIN.USER, user.ADMIN.PASSWORD)
  })
  it('Cadastro de Usuário no Twygo - Sucesso', () => {    
    cy.get(menu.SUPERIOR.PERFIL).click()
    cy.get(menu.SUPERIOR.PERFIL_ADMIN).click()
    cy.get(menu.LATERAL.USUARIOS).click()
    cy.get(usuarios.LISTA.BTN_ADD_USUARIOS).click()
    cy.get(usuarios.CADASTRO.NOME_USUARIO).type('Clubinho')
    cy.get(usuarios.CADASTRO.SOBRENOME_USUARIO).type('Das Letras')
    cy.get(usuarios.CADASTRO.EMAIL_USUARIO).type('Clubinho@gmail.com')
    cy.get(usuarios.CADASTRO.BTN_SALVAR).click()
    cy.get(flash_msg.MSG_SUCESSO).should('be.visible')  
  })
})    