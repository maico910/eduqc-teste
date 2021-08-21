describe('Login', function () {
  beforeEach(() => {
    cy.visit(`/login`)
  })

  it('Login Fail: Login', () => {
    cy.login('fail@teste.com', '12345678')
    cy.get('.q-notification').children().should('contain', 'Autenticação negado')
  })

  it('Login Fail: Password', () => {
    cy.login('teste@teste.com', '1234567')
    cy.get('.q-notification').children().should('contain', 'Autenticação negado')
  })

  it('Login Sucess', () => {
    cy.login('teste@teste.com', '12345678')

    cy.url().should('equal', 'http://localhost:8080/#/').pause()
  })
})
