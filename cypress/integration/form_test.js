describe('form test', ()=>{
    it('test that the form is working', ()=>{
        cy.visit('/')

        cy.get('button#submit')
        .should('be.disabled')

        const name = "Anna Davis"
        cy.get('[for=name]>input')
        .type(name)
        .should('have.value', name)

        const email="ilikemax@gmail.com";
        cy.get('[for="email"]> input')
        .type(email)
        .should('have.value', email)

        const password="washpassword"; 
        cy.get('[for="password"]>input')
        .type(password)
        .should('have.value', password)

        cy.get('[data-cy="terms"]> input')
        .click()
        .should('have.checked', true)
    })
})