declare namespace Cypress {
    interface Chainable<Subject> {
        createTask(taskName?): Chainable<void>
        removeTaskByName(taskName): Chainable<void>
        postTask(task): Chainable<void>
        isRequired(targetMessage): Chainable<void>
    }
}