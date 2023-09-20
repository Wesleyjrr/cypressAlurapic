describe('Pagina Login, cenário Correto', () => {

    beforeEach(()=> {
        cy.visit('/');    
    });

    it('Deve realizar login e logout com sucesso', () => {
        //cy.getByData('loginUserName').type('wesleyj');
        //cy.getByData('loginPassword').type('wesley123',{log: false });
        cy.login('wesleyj','wesley123', {log: false });
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