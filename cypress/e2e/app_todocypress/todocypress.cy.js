/// <reference types="cypress"/>
describe('Aplicativo de tarefas cypress', () => {
    beforeEach(()=>{
      cy.visit("https://example.cypress.io/todo")
    })
    it('Deve exibe os itens de tarefas por padrão do aplicativo', () => {
     // 1 verificar se tem dois itens dentro da lista
     cy.get('.todo-list li').should('have.length',2);
     // 2 verificar se tem o item Pay electric bill
     cy.get('.todo-list li').first().should('have.text','Pay electric bill');
     // 3 verificar se tem o item Walk the dog
     cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
    });
    it('Deve adicionar um novo itens de tarefas', () => {
      // 1 crie um variavel com o texto do novo item
      const novoItem ='Comida para o gato'
      // 2 inclua o item no campo
      cy.get('[data-test="new-todo"]').type(`${novoItem}{enter}`);
      // 3 verificar se o item incluido está dentro da lista
      cy.get('.todo-list li').should('have.length',3).last().should('have.text',novoItem);
   });
   
    it('Deve marcar um item como concluído', () => {      });

    // Usando o contex para preparar os próximos testes a partir de uma situação 
    context('Usando uma tarefa verificada', () => {
      beforeEach(() => {
        cy.contains('Pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()   }); 

    // inicia a partir da situação do contex
    it( 'Deve filtrar tarefas incompletas',() => { });

    it( 'Deve filtrar por tarefas concluídas',() => {});

    it( 'Deve excluir todas as tarefas concluídas',() => { });
    
    });
});