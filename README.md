# playwrightTraining
Criação de scripts de automação utilizando Playwright, com o intuito de estudar um novo framework



Feature: Automação E2E – SauceDemo - BDD

  @login_valido
  Scenario: Login válido  
    &nbsp; Dado que o usuário já existe  
    &nbsp; Quando ele inserir "standard_user" no campo Username  
    &nbsp; E inserir "secret_sauce" no campo Password  
    &nbsp; E clicar no botão de Login  
    &nbsp; Então a página de inventário deve ser exibida  

  @login_invalido  
  Scenario: Login inválido  
    &nbsp; Quando ele inserir "user_falso" no campo Username  
    &nbsp; E inserir "senha_errada" no campo Password  
    &nbsp; E clicar no botão de Login  
    &nbsp; Então uma mensagem de erro deve ser exibida  

  @adicionar_carrinho  
  Scenario: Adicionar produto ao carrinho  
    &nbsp; Dado que o usuário está logado  
    &nbsp; Quando ele clicar no botão "Add to cart" de um produto  
    &nbsp; E clicar no ícone do carrinho  
    &nbsp; Então o produto deve aparecer listado no carrinho  

  @finalizar_compra  
  Scenario: Finalizar compra  
    &nbsp; Dado que há um produto no carrinho  
    &nbsp; Quando ele clicar em "Checkout"  
    &nbsp; E preencher nome, sobrenome e CEP  
    &nbsp;E clicar em "Continue"  
    &nbsp; E clicar em "Finish"  
    &nbsp; Então a mensagem "Thank you for your order!" deve ser exibida  


## Ferramentas
- [Node.js]
- [Playwright]
