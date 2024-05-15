describe('funcionalidades de excluir quadro', () => {

    beforeEach(() => {
      
      // Navegar para a url do trello
      cy.visit('https://trello.com/');
    });
  
    it('excluir quadro', () => { 
      
      // Clicar no botão Login
      cy.get('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"]').should('be.visible').click();

      cy.origin('https://id.atlassian.com', () => {
      // Digitar e-mail
      cy.get('[data-testid="username"]').type('felipe.magalhaes@v8.tech');
      // Clicar no botão “Continuar”
      cy.get('#login-submit > .css-178ag6o').should('be.visible').click();
      // Digitar a senha
      cy.wait(2500);
      cy.get('#password').type('Teletronix123#');
      // Clicar no botão "Entrar"
      cy.get('#login-submit').click();
      })
      
      // Clicar no quadro 
      cy.get(':nth-child(2) > .board-tile > .board-tile-details').click();
      // Clicar por cima do menu
      cy.wait(2500);
      cy.get('.wVRQcl7CJz79Tr > .cZx7p8hAQGLEz5').click();
      // Clicar no menu do quadro
      cy.get('.wVRQcl7CJz79Tr > .yhkRJjjbRlcC1Q > .RNC8UUAwghG9uA > .frrHNIWnTojsww > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]').click();
      // Clicar em fechar quadro
      cy.get('.aIwo0vvYqaDzfq > .frrHNIWnTojsww').click();
      // Clicar em confirmar fechar quadro
      cy.get('[data-testid="popover-close-board-confirm"]').click();
      // Excluir permanentemente
      cy.get('[data-testid="close-board-delete-board-button"]').click();
      // Confirmar exclusão
      cy.get('[data-testid="close-board-delete-board-confirm-button"]').click();
      // Verificar se voltei para a area de trabalho
      cy.wait(3500);
      cy.get(':nth-child(2) > .boards-page-section-header-name').should('be.visible');
      
      
    });
});