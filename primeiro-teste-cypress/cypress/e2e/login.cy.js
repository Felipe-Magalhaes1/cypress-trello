describe('funcionalidades Login', () => {

  beforeEach(() => {
    // Navegar para a url do trello
    cy.visit('https://trello.com/');
  });

  it('realizar login com usuaria já cadastrado', () => {  
    // Clicar no botão Login
    cy.get('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"]').should('be.visible').click();

    cy.origin('https://id.atlassian.com', () => {
    // Digitar e-mail
    cy.get('[data-testid="username"]').type('felipe.magalhaes@v8.tech');
    // Clicar no botão “Continuar”
    cy.get('#login-submit > .css-178ag6o').should('be.visible').click();
    // Digitar a senha
    cy.get('#password').type('Teletronix123#');
    // Clicar no botão "Entrar"
    cy.get('#login-submit').click();
    })
  });
});