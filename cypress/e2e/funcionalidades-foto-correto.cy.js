describe('Funcionalidades Foto, cenário de sucesso', () =>{

   beforeEach(() => {
    cy.visit('/');
    cy.login('wesleyj','wesley123');
   })
   
   
    it('Deve cadastrar com sucesso uma foto', () => {
        cy.get('.fa-plus-circle').click();
        cy.get('[type="file"]').selectFile('dica.png', {force:true});
        cy.get('[placeholder="photo description"]').type('seliga');
        //cy.get('[type="checkbox"]').click();
        cy.get('[type="submit"]').click();
        cy.contains('Upload complete').should('be.visible');
        cy.get('.fa-home').click();
        cy.get('.img-thumbnail').should('have.length', 1);
        //cy.wait(1000); 
    })

  
   it('Deve dar like e comentar na foto', () => {
    cy.get('.img-thumbnail').first().click();
    cy.get('.fa-heart-o').click();
    cy.get('.fa-comment-o').click();
    cy.wait(1000);
    cy.get('.form-control').type(' Muito bom');
    cy.get('[type="submit"]').click();
    cy.get('.fa-heart-o').should('contain', 1);
    cy.wait(1000);
    cy.reload();
    // cy.contains('.fa-comment-o').should('exist').and('have.text',1);
    // cy.get('.fa-comment-o').should('contain', 1);
    // cy.get('[href="#/"]').click();
    })
    

    it('Deve Remover uma foto com sucesso', () => {
        cy.get('.img-thumbnail').first().click();
        cy.get('[photoowneronly=""]').click();
        cy.contains('Photo removed ').should('be.visible');
        cy.get('.fa-home').click();
        cy.get('.img-thumbnail').should('have.length', 0); 
    })

    it('Deve Pesquisar uma foto entre duas opções', () => {

        cy.get('.fa-plus-circle').click();
        cy.get('[type="file"]').selectFile('dica.png', {force:true});
        cy.get('[placeholder="photo description"]').type('seliga');
        //cy.get('[type="checkbox"]').click();
        cy.get('[type="submit"]').click();
        cy.contains('Upload complete').should('be.visible');
        cy.wait(1000);

        cy.get('.fa-home').click();
        cy.get('.fa-plus-circle').click();
        cy.get('[type="file"]').selectFile('banco.png', {force:true});
        cy.get('[placeholder="photo description"]').type('banco');
        //cy.get('[type="checkbox"]').click();
        cy.get('[type="submit"]').click();
        cy.contains('Upload complete').should('be.visible');
        cy.wait(1000);
        
        cy.get('[type="search"]').type('seliga');
        cy.wait(1000);
        cy.get('.img-thumbnail').first().click();
        cy.contains('.break-word','seliga').should('be.visible');
        cy.get('.fa-home').click();

        cy.get('[type="search"]').type('banco');
        cy.wait(1000);
        cy.get('.img-thumbnail').first().click();
        cy.contains('.break-word','banco').should('be.visible');
        cy.get('.fa-home').click();

    })


})