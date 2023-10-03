

describe('Api Alurapic', () => {
    it('Dados da API', () => {
            cy.request({
                method: 'POST',
                url: 'https://alurapic-api.onrender.com/user/login',
                body: Cypress.env()
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('id')
                expect(res.body.id).to.be.equal(29)
            })
    })

    it('Fotos do Usuário', () => {
        //const tempoEsperado = Math.random() * 50;

        cy.request({
            method:'GET',
            url:'https://alurapic-api.onrender.com/wesleyj/photos?page=1'
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property('description');
            expect(res.body[0].description).to.be.equal('seliga');
            //expect(res.duration).to.be.lte(tempoEsperado);
        })
    })



})