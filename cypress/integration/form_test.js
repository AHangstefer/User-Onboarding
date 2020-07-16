describe('form test', ()=>{
    it('test that the form is working', ()=>{
        cy.visit('/')

        cy.get('[for=name]>input')
        .type('Anna Davis')
        .should('have.value', 'Anna Davis')

        const email="annalikesherself@gmail.com";
        cy.get('[for="email"]> input')
        .type(email)
        .should('have.value', email)
    })
})