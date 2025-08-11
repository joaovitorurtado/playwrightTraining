# playwrightTraining
Criação de scripts de automação utilizando Playwright, com o intuito de estudar um novo framework



Feature: Automação E2E – SauceDemo - BDD

  @login_valido
  Scenario: Login válido  
    Dado que o usuário já existe  
    Quando ele inserir "standard_user" no campo Username  
    E inserir "secret_sauce" no campo Password
    E clicar no botão de Login
    Então a página de inventário deve ser exibida

  @login_invalido
  Scenario: Login inválido
    Quando ele inserir "user_falso" no campo Username
    E inserir "senha_errada" no campo Password
    E clicar no botão de Login
    Então uma mensagem de erro deve ser exibida

  @adicionar_carrinho
  Scenario: Adicionar produto ao carrinho
    Dado que o usuário está logado
    Quando ele clicar no botão "Add to cart" de um produto
    E clicar no ícone do carrinho
    Então o produto deve aparecer listado no carrinho

  @finalizar_compra
  Scenario: Finalizar compra
    Dado que há um produto no carrinho
    Quando ele clicar em "Checkout"
    E preencher nome, sobrenome e CEP
    E clicar em "Continue"
    E clicar em "Finish"
    Então a mensagem "Thank you for your order!" deve ser exibida


## Ferramentas
- [Node.js]
- [Playwright]
