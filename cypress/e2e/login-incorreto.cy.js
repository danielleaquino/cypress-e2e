describe('Página de cadastro', () => {
    
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
          statusCode:400, }).as('stubPost');
        });

    it('Deve preencher os campos de login incorretamente e exibir mensagem de erro', () => {

      cy.get('[data-test="input-loginEmail"]').type('danielle');
      cy.get('[data-test="input-loginPassword"]').type('Senha');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Deve falhar mesmo com os campos preenchidos dentro dos parâmetros', () => {
      cy.login('danielle_aquino@email.com', 'Senha123456');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais').should('be.visible');
    })
})  