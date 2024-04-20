describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it.only('Valid login by a valid user', () => {
    cy.fillLoginFields()
  })

  it('Valid login by a invalid user', () => {
    cy.get("input[name='username']").type('invalid')
    cy.get("input[name='password']").type('admin123')
    cy.get('button[type=submit]').click()

    cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
  })

  it('Valid that popup to reset password is shown', () => {
    cy.contains('Forgot your password?').click()
    cy.get('h6').should('have.text', 'Reset Password')
  })

  it('Valid it is possible to reset password', () => {
    cy.contains('Forgot your password?').click()
    cy.get("input[name='username']").type('Admin')
    cy.contains(' Reset Password ').click({force:true})

    cy.get('h6').should('have.text', 'Reset Password link sent successfully')

  })
})