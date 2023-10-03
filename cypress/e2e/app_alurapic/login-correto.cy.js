/// <reference types="cypress"/>

describe('Pagina Login, cenário Correto', () => {
    //Hook realizado antes de cada teste, a / representa o endereço do base URL
    beforeEach(()=> {
        cy.visit('/');    
    });

    it('Deve realizar login e logout com sucesso', () => {
        //Dentro do arquivo Cypress.env.json possui um objeto com email e senha para proteger estes dados de teste
        cy.login(Cypress.env('userEmail'), Cypress.env('password'), {log: false });
        //Comando personalizado getByData
        cy.getByData('loginBtn').click(); 
        //Validando se é visivel o nome do usuario e a opção de logout
        cy.contains('a', 'wesleyj').should('be.visible');
        cy.contains('a', '(Logout)').should('be.visible');
        // Validando a ação de deslogar
        cy.contains('a', '(Logout)').click();
        //Validando se após o logout realmente voltamos a pagina inicial
        cy.contains('Please, login!').should('be.visible');
    });       

});