describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fillLoginFields()
        cy.openPIMmenu()
    })

    it('Save new employee form without filling login details', () => {
        cy.contains('Add').click()
        cy.contains('Add Employee').should('be.visible')
        cy.get("input[name='firstName']").type("Maria")
        cy.get("input[name='middleName']").type("Joaquina")
        cy.get("input[name='lastName']").type("Santos")
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').as('employeeId')
        cy.get('@employeeId').should('not.have.value', '');
        
        cy.contains('Save').click()
        cy.get('.oxd-toast--success').should('be.visible')
    })

   /*  it('Save new employee with login details', () => {
        cy.contains('Add').click()
        cy.contains('Add Employee').should('be.visible')
        cy.get("input[name='firstName']").type("Maria")
        cy.get("input[name='middleName']").type("Joaquina")
        cy.get("input[name='lastName']").type("Santos")
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').as('employeeId')
        cy.get('@employeeId').should('not.have.value', '');

        cy.get('.oxd-switch-input').click().should('have.class', 'oxd-switch-input--active')

        cy.contains('Save').click()
    }) */
})