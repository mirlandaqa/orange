Cypress.Commands.add('fillLoginFields', function () {
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get('button[type=submit]').click()

    cy.get('h6').should('have.text', 'Dashboard')

})

Cypress.Commands.add('openPIMmenu', function () {
    cy.contains("PIM").click()
    cy.get('.active')
        .contains('PIM')
        .should('have.text', 'PIM')

})