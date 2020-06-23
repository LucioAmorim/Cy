import login_locator from './login_locators'

Cypress.Commands.add('login', (env, user, password) => {
  cy.visit(env)
  cy.get(login_locator.USER).type(user)
  cy.get(login_locator.PASSWORD).type(password)
  cy.get(login_locator.BTN_LOGIN).click()
})