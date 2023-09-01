describe (() => {
    it('Dados', () => {
        cy.request({
            method:'POST',
            url:'https://3076-cypress-alurapic-front.vercel.app/#/home',
            body:Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.propety('id')
            expect(res.body.id).to.be.equal(29)
            
        })
    })
})