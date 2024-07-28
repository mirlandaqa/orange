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
        const campo = '@employeeId';
        const novoValor = Math.floor(1000 + Math.random() * 9000);
        cy.get(campo).clear().type(novoValor);

        cy.contains('Save').click()
        cy.get('.oxd-toast--success')
            .should('be.visible')    
    })

    it.only('Save new employee form with login details', () => {
        cy.contains('Add').click()
        cy.contains('Add Employee').should('be.visible')
        cy.get("input[name='firstName']").type("Maria")
        cy.get("input[name='middleName']").type("Joaquina")
        cy.get("input[name='lastName']").type("Santos")
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').as('employeeId')
        const campo = '@employeeId';
        const novoValor = Math.floor(1000 + Math.random() * 9000);
        cy.get(campo).clear().type(novoValor);

        cy.get('.oxd-switch-input').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .as('campoUsername')
        cy.get('@campoUsername').type('mama_s')
        cy.get("input[type='password']").first().type('senha@123')
        cy.get(".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").as('campoConfirmaSenha')
        cy.get('@campoConfirmaSenha').type('senha@123')
        cy.contains('Save').click()
        cy.get('.oxd-toast--success')
            .should('be.visible')
    })
})