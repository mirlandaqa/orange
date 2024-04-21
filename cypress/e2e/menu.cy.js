describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fillLoginFields()
    })

    it('Valid the Dashboard menu is selected after logging', () => {
        cy.get('.active')
            .contains('Dashboard')
            .should('have.text', 'Dashboard')
    })
    
    it('Valid searching by menu', () => {
        cy.get("input[placeholder='Search']")
            .type('Leave')
        
        cy.get('a span')
            .should('have.text', 'Leave')

    })

    it('Valid that nothing is returned after searching for an invalid menu', () => {
        cy.get("input[placeholder='Search']").type('ssshht')
        cy.get('.oxd-sidepanel-body').should('have.text', '')
    })

    it('Valid that another menu is opened when it is clicked', () => {
        cy.contains('Admin').click()

        cy.get('.active')
            .contains('Admin')
            .should('have.text', 'Admin')
    })
})