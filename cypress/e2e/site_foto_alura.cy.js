describe('Testes de ponta a ponta site de fotos alura', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home')
  });
  
  it('Deve retornar mensa gens de validação', () => {
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Email is required!').should('be.visible');
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Full name is required!').should('be.visible');
    cy.contains('ap-vmessage','User name is required!').should('be.visible');
    //cy.contains('ap-vmessage','Password is required!').should('be.visible');
    
  });

  it('Deve retornar mensagens de email invalido', () => {
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="email"]').type('teste');
    cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');

  });
  
  it('Deve retornar mensagens de senha com no minimo 8 caracteres', () => {
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="password"]').type('123');
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');

  });

  it('Deve realizar login com usuario valido', () => {
    cy.get('input[formcontrolname="userName"]').type('wesley');
    cy.get('input[formcontrolname="password"]').type('ifro123456');
    cy.contains('button','login').click();
    cy.contains('a','(Logout)').should('be.visible');
 });  

 it('Deve realizar login com usuario invalido', () => {
  cy.get('input[formcontrolname="userName"]').type('teste');
  cy.get('input[formcontrolname="password"]').type('1234455');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Invalid user name or password');
  });

});  

});
