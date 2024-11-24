import { baseUrl } from '../support/config';
import { faker } from '@faker-js/faker';

describe('Login', () => {

    const selectors = {
        firstNameInput: "input[name='firstName']",
        midleNameInput: "input[name='middleName']",
        lastNameInput: "input[name='lastName']",
        toastSuccessMessage: ".oxd-toast--success",
        employeeIdInput: ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input",
        userNameInput: ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
        userLoginInput: "input[type='password']",
        confirmPasswordInput: ".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
        submitButton: "button[type='submit']"
    }

    const generateRandomEmployeeId = () => Math.floor(1000 + Math.random() * 9000);

    const fillEmployeeForm = (firstName, middleName, lastName, employeeId) => {
        cy.get(selectors.firstNameInput).type(firstName);
        cy.get(selectors.midleNameInput).type(middleName);
        cy.get(selectors.lastNameInput).type(lastName);
        cy.get(selectors.employeeIdInput).clear().type(employeeId);
    }

    function verifyErrorMessageAtCorrectField(index, fieldName) {
        cy.get('.oxd-input-group.oxd-input-field-bottom-space')
            .eq(index)
            .within(() => {
                cy.get(`input[name="${fieldName}"]`).should('exist');
                cy.get('.oxd-input-field-error-message')
                    .should('have.text', 'Required')
                    .and('be.visible');
            });
    }

    beforeEach(() => {
        cy.visit(baseUrl)
        cy.fillLoginFields()
        cy.openPIMmenu()

    })

    context('Add Employee tab', () => {
        it.only('Should save new employee form without filling login details', () => {
            const employeeIdRandom = generateRandomEmployeeId();

            cy.contains('Add').click()
            cy.contains('Add Employee').should('be.visible')
            cy.fixture('employee').then((employee) => {
                fillEmployeeForm(
                    employee.firstName,
                    employee.middleName,
                    employee.lastName,
                    employeeIdRandom)

            })
            cy.contains('Save').click()
            cy.get(selectors.toastSuccessMessage).should('be.visible')
        })

        it('Should save new employee form with login details', () => {
            const employeeIdRandom = generateRandomEmployeeId();

            cy.contains('Add').click()
            cy.contains('Add Employee').should('be.visible')
            fillEmployeeForm('Maria', 'Joaquina', 'Santos', employeeIdRandom)

            cy.get('.oxd-switch-input').click()
            cy.get(selectors.userNameInput).type(faker.name.findName())
            cy.get(selectors.userLoginInput).first().type('senha@123')
            cy.get(selectors.confirmPasswordInput).type('senha@123')
            cy.contains('Save').click()
            cy.get(selectors.toastSuccessMessage)
                .should('be.visible')
        })

        it('Should prevent saving an employee when required fields are missing', () => {
            cy.contains('a', 'Add Employee').click();
            cy.get(selectors.submitButton).click();

            verifyErrorMessageAtCorrectField(1, 'firstName');
            verifyErrorMessageAtCorrectField(3, 'lastName');
        })
    })

    /* context('Configuration tab', () => {
      })
  
      context('Employee List tab', () => {
      })
  
      context('Reports tab', () => {
      }) */
})