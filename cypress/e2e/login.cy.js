import { baseUrl } from '../support/config';
describe('Login', () => {

  const selectors = {
    usernameInput: "input[name='username']",
    passwordInput: "input[name='password']",
    submitButton: "button[type=submit]",
    alertMessage: '.oxd-alert-content-text'
  }

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  context('Positive cases', () => {

    it('Should show focus on the username field', () => {
      cy.get(selectors.usernameInput)
        .should('have.attr', 'autofocus')
    })

    it('Should login with a valid user', () => {
      cy.fillLoginFields();
      cy.url().
        should('include', '/dashboard');
    })

    it('Should show popup to reset password', () => {
      cy.contains('Forgot your password?')
        .click()
      cy.get('h6')
        .should('have.text', 'Reset Password')
    })

    it('Should be able to reset the password', () => {
      cy.contains('Forgot your password?').click()
      cy.get(selectors.usernameInput)
        .type('Admin')
      cy.contains(' Reset Password ').
        click({ force: true })
      cy.get('h6')
        .should('have.text', 'Reset Password link sent successfully')
    })

  })

  context('Casos alternativos', () => {

    it('Should show error message for invalid user', () => {
      cy.get(selectors.usernameInput)
        .type('invalid')
      cy.get(selectors.passwordInput)
        .type('admin123')
      cy.get(selectors.submitButton)
        .click()
      cy.get(selectors.alertMessage)
        .should('have.text', 'Invalid credentials')
    })

    it('Should show error message for invalid password', () => {
      cy.get(selectors.usernameInput)
        .type('Admin')
      cy.get(selectors.passwordInput)
        .type('testeee')
      cy.get(selectors.submitButton)
        .click()
      cy.get(selectors.alertMessage)
        .should('have.text', 'Invalid credentials')
    })

    it('Should validate required fields', () => {
      cy.get(selectors.submitButton)
        .click()
      cy.contains('span', 'Required')
        .should('be.visible')
    })

    it('Should return to login screen when clicking Cancel in reset password page', () => {
      cy.contains('Forgot your password?')
        .click()
      cy.contains('Cancel')
        .click()
      cy.url()
        .should('eq', baseUrl);
    })
  })
})