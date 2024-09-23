/// <reference types="cypress" />

describe('tasks', () => {

    let testData;

    before(() => {
        cy.fixture('tasks').then(t => {
            testData = t
        })
    })

    context('register', () => {
        it('should add a new task', () => {
            const taskName = 'Read a TS book'

            cy.removeTaskByName(taskName)
            cy.createTask(taskName)

            cy.contains('main div p', 'Read a TS book')
                .should('be.visible')
        })

        it('should not be allowed duplicated tasks', () => {
            const task = testData.dup

            cy.removeTaskByName(task.name)
            cy.postTask(task)
            cy.createTask(task.name)

            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
        })

        it('mandatory field', () => {
            cy.createTask()
            cy.isRequired('This is a required field')
        })
    })

    context('update', () => {
        it('should complete a task', () => {
            const task = {
                name: 'Go to New York',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('deletion', () => {
        it('should remove a task', () => {
            const task = {
                name: 'Study JS',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    })
})
