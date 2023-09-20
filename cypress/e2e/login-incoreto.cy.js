describe('Pagina Login, cenário Incorreto', () => {

    beforeEach(()=> {
        cy.visit('/');
        // Duble de Teste, forçando msg de erro
        cy.intercept('POST','https://alurapic-api.onrender.com/user/login', {statusCode:400} ).as('stubPost');
    });
    
    it("Deve verificar as mensagem de dados obrigatorios no login ", () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible'); 
        cy.get('[data-test="loginUserName"]').type('carlos');
        cy.get('[data-test="loginPassword"]').type('carlos');
        cy.get('[data-test="loginBtn"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')    }); 
    });


    // Usando duble de teste para forçar um comportamento
    it('Deve Falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('wesleyj','wesley1234');
        // cy.wait(1000);
        cy.wait('@stubPost');
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')    }); 
        
    });       
    
  

    });