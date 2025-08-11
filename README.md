# playwrightTraining
Criação de scripts de automação utilizando Playwright, com o intuito de estudar um novo framework



Feature: Automação E2E – SauceDemo - BDD

  @login_valido
  Scenario: Login válido  
   &ensp; Dado que o usuário já existe  
   &ensp; Quando ele inserir "standard_user" no campo Username  
   &ensp; E inserir "secret_sauce" no campo Password  
   &ensp; E clicar no botão de Login  
   &ensp; Então a página de inventário deve ser exibida  

  @login_invalido  
  Scenario: Login inválido  
   &ensp; Quando ele inserir "user_falso" no campo Username  
   &ensp; E inserir "senha_errada" no campo Password  
   &ensp; E clicar no botão de Login  
   &ensp; Então uma mensagem de erro deve ser exibida  

  @adicionar_carrinho  
  Scenario: Adicionar produto ao carrinho  
   &ensp; Dado que o usuário está logado  
   &ensp; Quando ele clicar no botão "Add to cart" de um produto  
   &ensp; E clicar no ícone do carrinho  
   &ensp; Então o produto deve aparecer listado no carrinho  

  @finalizar_compra  
  Scenario: Finalizar compra  
   &ensp; Dado que há um produto no carrinho  
   &ensp; Quando ele clicar em "Checkout"  
   &ensp; E preencher nome, sobrenome e CEP  
   &ensp; E clicar em "Continue"  
   &ensp; E clicar em "Finish"  
   &ensp; Então a mensagem "Thank you for your order!" deve ser exibida  


## Ferramentas
- [Node.js]
- [Playwright]
