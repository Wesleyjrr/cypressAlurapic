
describe('Pagina Cadastro, cenário Incorreto AluraPic', () => {

    beforeEach(()=> {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    });
    
    it("Deve verificar as mensagem de dados obrigatorios no cadastro ", () => {

        cy.getByData('register').click();
        cy.getByData('btnRegister').click();
        cy.contains('Email is required!').should('be.visible');
        cy.getByData('btnRegister').click();
        cy.contains('Full name is required!').should('exist');
        cy.contains('User name is required!').should('exist');
        cy.contains('Password is required!').should('exist');
        // cy.contains('[data-test="register"]', 'Register now').click();
        // cy.contains('[data-test="btnRegister"]','Register').click();
        // cy.contains('ap-vmessage','Email is required!').should('exist').and('have.text','Email is required!');
        // cy.contains('[data-test="btnRegister"]','Register').click();
        // cy.contains('Full name is required!').should('exist');
        // cy.contains('User name is required!').should('exist');
        // cy.contains('Password is required!').should('exist');
        
    });

    it.skip("Deve verificar para cada campo msg do preenchimento incorreto ", () => {
        cy.contains('[data-test="register"]', 'Register now').click();
        cy.get('[data-test="email"]').type('111');
        cy.contains('[data-test="btnRegister"]', 'Register').click();
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
        cy.get('[data-test="fullName"]').type('111');
        cy.get('[data-test="registerUserName"]').type('111');
        cy.contains('[data-test="btnRegister"]', 'Register').click();
        cy.contains('.text-success', 'User available').should('be.visible');
        cy.get('[data-test="registerPassword"]').type('111');
        cy.contains('[data-test="btnRegister"]', 'Register').click();
        cy.contains('Mininum length is 8').should('be.visible');
        cy.contains('Username and password must be different').should('be.visible');   
    });
        
    });