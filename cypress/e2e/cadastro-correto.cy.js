//import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Pagina Cadastro, cenário Correto', () => {

beforeEach(()=> {
    cy.visit('/');
});

 const usuario = require('../fixtures/usuarios.json');
 usuario.forEach(usuario => {
    it("Deve realizar cadastro com sucesso ", () => {
        cy.contains('[data-test="register"]', 'Register now').click();
        cy.get('[data-test="email"]').type(usuario.email);
        cy.get('[data-test="fullName"]').type(usuario.fullName);
        cy.get('[data-test="registerUserName"]').type(usuario.userName);
        cy.get('[data-test="registerPassword"]').type(usuario.password);
        cy.contains('[data-test="btnRegister"]', 'Register').click();
        
        // Cadastro.acessarPaginaDeCadastro();
        // Cadastro.preencherFormulario();
        // Cadastro.submeterCadastro();
    });

 })
    
});