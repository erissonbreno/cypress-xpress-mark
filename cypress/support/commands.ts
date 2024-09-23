Cypress.Commands.add('createTask', (taskName: string = '') => {
    cy.visit('/')
        cy.get('#newTask').as('inputTask')

    if (taskName) {
        cy.get('@inputTask')
            .type(taskName)
    }

    cy.contains('button', 'Create').click()
});

Cypress.Commands.add('removeTaskByName', (taskName) => {
    cy.request({
        url: `${Cypress.env('apiUrl')}/helper/tasks`,
        method: 'DELETE',
        body: {name: taskName}
    }).then(response => {
        expect(response.status).to.equal(204)
    })
})

Cypress.Commands.add('postTask', task => {
    cy.request({
        url: `${Cypress.env('apiUrl')}/tasks`,
        method: 'POST',
        body: task
    }).then(response => {
        expect(response.status).to.equal(201)
    })
})

Cypress.Commands.add('isRequired', targetMessage => {
    cy.get('@inputTask')
        .invoke('prop', 'validationMessage')
        .should((text) => {
            expect(targetMessage).to.eq(text)
        })
})