describe('Pagina Login, cenário Incorreto', () => {

    beforeEach(()=> {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
       
    });
    



    it('Deve realizar login com sucesso', () => {
        cy.getByData('loginUserName').type('wesleyj');
        cy.getByData('loginPassword').type('wesley123');
        cy.getByData('loginBtn').click();  
    });       
    
  

    });