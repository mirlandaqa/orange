# Site Orange

## Funcionalidades

- **Login**: Verificação de autenticação com diferentes combinações de dados válidos e inválidos.
- **Menu**: Teste de navegação e visibilidade dos itens do menu.
- **PIM (Cadastro de funcionários)**: Teste de cadastro e verificação de dados de funcionários.

## Casos de Teste Manuais
Os casos de teste manuais estão documentados na pasta /test_plan/test_cases.md, que contém os cenários de teste, passos, dados esperados e critérios de aceitação.
Esse documento foi elaborado para orientar testes exploratórios e de validação manual.

## Casos de Teste Automatizados
Os casos de teste automatizados estão na pasta /cypress/e2e, e incluem testes para as mesmas funcionalidades dos casos manuais:

- login.cy.js
- menu.cy.js
- pim.cy.js

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) 
- [Cypress](https://www.cypress.io/)

## Instalação

1. Clone o repositório pelo terminal:
   ```bash
   git clone https://github.com/mirlandaqa/orange
2. Acesse o repositório do seu projeto: 
   ```bash 
   cd orange
3. Instale as dependências do projeto:
   ```bash
   npm install
## Executando os Testes
Para rodar os testes do projeto, você pode escolher entre o modo headless ou o modo interativo.

1. Executar testes em modo headless (recomendado para integração contínua):
   ```bash
   npx cypress run
2. Abrir o Cypress em modo interativo (útil para desenvolvimento):
   ```bash
   npx cypress open
   