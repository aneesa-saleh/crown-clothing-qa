Cypress.Commands.add('getById', (id: string) => {
    return cy.get(`#${id}`)
})

Cypress.Commands.add('getByClass', (className: string) => {
    return cy.get(`.${className}`)
})