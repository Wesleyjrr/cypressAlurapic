
describe('Pagina Cadastro, cenário Correto', () => {

beforeEach(()=> {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
});

it("Deve realizar cadastro com sucesso ", () => {
    cy.contains('[data-test="register"]', 'Register now').click();
    cy.get('[data-test="email"]').type('wesley_jhones14@hotmail.com');
    cy.get('[data-test="fullName"]').type('Wesley Jhonnes');
    cy.get('[data-test="registerUserName"]').type('wesleyj');
    cy.get('[data-test="registerPassword"]').type('wesley123');
    cy.contains('[data-test="btnRegister"]', 'Register').click();
    
});
    
});