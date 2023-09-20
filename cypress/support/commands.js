//comando personalizado para facilitar a escrita do teste
//comando personalizado para facilitar a escrita do teste
Cypress.Commands.add('getByData', (seletor) => {
  return cy.get(`[data-test=${seletor}]`)
});


// Comando personalizado para faciliata login no site
Cypress.Commands.add('login', (email, senha) => {
  cy.getByData('loginUserName').type(`${email}`);
  cy.getByData('loginPassword').type(`${senha}`, {log: false });
  cy.getByData('loginBtn').click();
});
