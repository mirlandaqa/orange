# Site Orange

## Funcionalidades

- **Login**: Verificação de autenticação com diferentes combinações de dados válidos e inválidos.
- **Menu**: Teste de navegação e visibilidade dos itens do menu.
- **PIM (Cadastro de funcionários)**: Teste de cadastro e verificação de dados de funcionários.
  
## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) 
- [Cypress](https://www.cypress.io/)
- Qualquer outro requisito necessário.

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

