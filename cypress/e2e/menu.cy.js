import { baseUrl } from '../support/config';


describe('Menu ', () => {
    const selectors = {
        searchInput: "input[placeholder='Search']",
        activeMenu: '.active',
        sidePanelBody: '.oxd-sidepanel-body',
        menuItems: 'a span'
    }

    const expectedMenus = [
        'Admin',
        'PIM',
        'Leave',
        'Time',
        'Recruitment',
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',
        'Maintenance',
        'Claim',
        'Buzz'
    ]

    const checkActiveMenu = (menuName) => {
        cy.get(selectors.activeMenu)
            .should('contain.text', menuName);
    }

    beforeEach(() => {
        cy.visit(baseUrl)
        cy.fillLoginFields()
    })

    it('Should show the correct menu options', () => {
        cy.get(selectors.menuItems).each((menuItem, index) => {
            cy.wrap(menuItem).should('have.text', expectedMenus[index]);
        });
    })

    it('Validates that the Dashboard menu is selected after logging in', () => {
        checkActiveMenu('Dashboard');

    })

    it('Validates searching for a menu by name', () => {
        const menuName = 'Leave';
        cy.get(selectors.searchInput)
            .type(menuName);

        cy.get(selectors.menuItems)
            .should('contain.text', menuName);
    })

    it('Validates that no menu is returned for an invalid search', () => {
        cy.get(selectors.searchInput).type('ssshht');
        cy.get(selectors.sidePanelBody)
            .should('not.contain.text');
    })

    it('Valid that another menu is opened when it is clicked', () => {
        const menuName = 'Admin';
        cy.contains(menuName).click();
        checkActiveMenu(menuName);
    })
})