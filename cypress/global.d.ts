declare namespace Cypress {
    interface Chainable {
        getById(id: string): Chainable<JQuery<HTMLElement>>
        getByClass(className: string): Chainable<JQuery<HTMLElement>>
    }
}