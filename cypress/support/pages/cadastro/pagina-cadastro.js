const el = require('./elements').ELEMENTS;
const usuario = require('../fixtures/usuarios.json');

class Cadastro {
    
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        cy.contains('[data-test="register"]', 'Register now').click();     
    }

    preencherFormulario() {
        cy.get('[data-test="register"]').click();
        cy.get('[data-test="email"]').type(usuario.email);
        cy.get('[data-test="fullName"]').type(usuario.fullName);
        cy.get('[data-test="registerUserName"]').type(usuario.userName);
        cy.get('[data-test="registerPassword"]').type(usuario.password);
        cy.get('[data-test="btnRegister"]').click();
    }

    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }

}

export default new Cadastro();