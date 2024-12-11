
describe('Página de cadastro', () => {
  it('Deve realizar o cadastro de um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();

    // Preenchendo os campos de cadastro
    cy.get('[data-test="input-name"]').type('Danielle Aquino');
    cy.get('[data-test="input-email"]').type('danielle_aquino@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })

  

//   it('deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção”', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.get('.button').click()     
   
//   });

//   it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.get('.header__home').click();
//   })

//   it("Visita a página de login do Adopet", ()=>{
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.contains('a','Fazer login').click();
//   })

//   it("Visita a página HOME do AdoPet",()=>{
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//   })

//   it("Visite a página de /home do AdoPet e clique no botão “Falar com o responsável",()=>{
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//     cy.contains('a', 'Falar com responsável');
// })

})
