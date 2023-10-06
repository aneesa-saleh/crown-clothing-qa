describe('Sample test', () => {
    it('visits home page', () => {
        cy.loginWithGoogle()
        cy.visit('/')
        cy.contains('a', 'SHOP').should('be.visible')
    })
})