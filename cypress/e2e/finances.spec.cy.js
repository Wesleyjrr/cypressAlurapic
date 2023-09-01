describe('Testes finance', () => {

    beforeEach(() => {
      cy.visit('https://dev-finance.netlify.app/')
    });

    it("cadastrar entradas", () => {
        cy.get('#data-table tbody tr').should('have.length',0) //id +classe
        cy.get('#transaction > .button').click () //id + classe
        cy.get('#description').type('Presente') //id
        cy.get('[name=amount]').type(12)//atributos
        cy.get('[type=date]').type('2023-03-22')//atributos
        cy.get('button').contains('Salvar').click ()
        

        cy.get('#transaction > .button').click () //id + classe
        cy.get('#description').type('saida') //id
        cy.get('[name=amount]').type(-35)//atributos
        cy.get('[type=date]').type('2023-03-22')//atributos
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length',2)
    })

    it("Remover entradas e saidas", () => {
        const entrada = "Total"
        const saida = "kinderOvo"
       
        cy.get('#transaction > .button').click () //id + classe
        cy.get('#description').type('entrada') //id
        cy.get('[name=amount]').type(100)//atributos
        cy.get('[type=date]').type('2023-03-22')//atributos
        cy.get('button').contains('Salvar').click()

        cy.get('#transaction > .button').click () //id + classe
        cy.get('#description').type('saida') //id
        cy.get('[name=amount]').type(-35)//atributos
        cy.get('[type=date]').type('2023-03-22')//atributos
        cy.get('button').contains('Salvar').click()

        cy.get('td.description').contains('entrada')
        .parent().find('img').click()
        cy.get('td.description').contains('saida')
        .parent().find('img').click()

       /* cy.get('[data-index="0"] > :nth-child(4) > img').click()
        cy.get('[data-index="0"] > :nth-child(4) > img').click() */

        
        /*cy.get('td.description td')
        .contains(entrada)
        .parent()
        .contains('onclick[data-index="0"] > :nth-child(4) > img',)
        .click() */

        /*cy.get('td.description')
        .contains(saida)
        .parent()
        .find(img[onclick*=remove])
        .click()  */
    })

});
    