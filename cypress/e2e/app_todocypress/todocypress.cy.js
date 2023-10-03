/// <reference types="cypress"/>
describe('Aplicativo de tarefas cypress', () => {
    beforeEach(()=>{
    /* Cypress começa com uma folha em branco para cada teste então devemos dizer para ele visitar nosso site com o comando `cy.visit()`.
    Como queremos visitar a mesma URL no início de todos os nossos testes,   incluímos em nossa função beforeEach para que ela seja executada antes de cada teste */
      cy.visit("https://example.cypress.io/todo")
    })
    it('Deve exibe os itens de tarefas por padrão do aplicativo', () => {
     // 1 verificar se tem dois itens dentro da lista
    
    /* Usamos o comando `cy.get()` para obter todos os elementos que correspondem ao seletor.
    Então, usamos `should` para afirmar que existem dois itens correspondentes, quais são os dois itens padrão. */
     cy.get('.todo-list li').should('have.length',2);
     // 2 verificar se tem o item Pay electric bill

     /* Podemos ir ainda mais longe e verificar se cada um dos todos padrão contém o texto correto. Usamos as funções `first` e `last` para obter apenas o primeiro e o último elemento correspondente individualmente, e então execute uma asserção com `should`. */
     cy.get('.todo-list li').first().should('have.text','Pay electric bill');
     // 3 verificar se tem o item Walk the dog
     cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
    });
    it('Deve adicionar um novo itens de tarefas', () => {
      // 1 crie um variavel com o texto do novo item

      // Armazenaremos o texto do nosso item em uma variável para que possamos reutilizá-lo
      const novoItem ='Comida para o gato'
      // 2 inclua o item no campo

    /* Vamos pegar o elemento input e usar o comando `type` para insira nosso novo item de lista. Depois de digitar o conteúdo do nosso item, precisamos digitar a tecla Enter também para enviar a entrada.
    Esta entrada tem um atributo data-test então usaremos isso para selecionar o elemento de acordo com as melhores práticas:
    https://on.cypress.io/selecting-elements */
      cy.get('[data-test="new-todo"]').type(`${novoItem}{enter}`);
      // 3 verificar se o item incluido está dentro da lista

    /* Agora que digitamos nosso novo item, vamos verificar se ele realmente foi adicionado à lista.
    Como é o item mais novo, deve existir como o último elemento da lista.
    Além disso, com os dois itens padrão, devemos ter um total de 3 elementos na lista.
    Como as asserções produzem o elemento que foi afirmado, podemos encadear essas duas afirmações em uma única instrução. */
      cy.get('.todo-list li').should('have.length',3).last().should('have.text',novoItem);
   });
   
    it('Deve marcar um item como concluído', () => {      });

    // Usando o contex para preparar os próximos testes a partir de uma situação 
    context('Usando uma tarefa verificada', () => {
    
      beforeEach(() => {
    /* Usaremos o comando que usamos acima para marcar um elemento 
    Como queremos realizar vários testes que começam com a verificação um elemento, colocamos no gancho beforeEach para que seja executado no início de cada teste. */
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