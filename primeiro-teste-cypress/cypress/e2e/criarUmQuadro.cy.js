describe('funcionalidades de criar um quadro', () => {

    beforeEach(() => {
      // 1. Executar o navegador
      cy.visit('https://trello.com/');
    });
  
    it('criar um quadro', () => { 
      
      // Clicar no botão Login
      cy.get('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"]').should('be.visible').click();
      
      cy.origin('https://id.atlassian.com', () => {
      // 6. Entrar com nome e e-mail
      cy.get('[data-testid="username"]').type('felipe.magalhaes@v8.tech');
      // // 4. Clicar no botão “Continuar”
      cy.get('#login-submit > .css-178ag6o').should('be.visible').click();
      // 6. Digitar a senha
      cy.get('#password').should('be.visible').type('Teletronix123#');
      // Clicar no botão "Entrar"
      cy.get('#login-submit').click();
      })
      // Clicar no icon "+"
      cy.get('[data-testid="AddIcon"]').click();
      // Clicar em criar quadro
      cy.get('[data-testid="header-create-board-button"] > .LCeoUSr_PkZrP2').click();
      // Digitar nome do quadro
      cy.get('[data-testid="create-board-title-input"]').type('teste felipe');
      // Clicar em criar
      cy.get('[data-testid="create-board-submit-button"]').click();
      // Verificar se uma marcação foi criada
      cy.wait(6000);
      cy.get('.vVqwaYKVgTygrk').should('be.visible');
    });
});