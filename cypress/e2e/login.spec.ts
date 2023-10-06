describe('Authentication', () => {
    it('logs in successfully with Google', () => {
        cy.loginWithGoogle()
        cy.visit('/')
        cy.contains('span','aneesa2202@gmail.com').should('be.visible')
    })

    it.only('logs in successfully with Email', () => {
        cy.loginWithEmail()
        cy.visit('/')
        cy.contains('span', 'aneesa.saleh@yahoo.com')
            .should('be.visible')
    })
})