# Automation-API
O projeto baseia-se na API referente a pagina https://automationexercise.com/api_list

### Para rodar os testes aqui propostos voce precisa:
- Baixar o repositório `git clone https://github.com/EuSouDio/Automation-API.git`
- Instalar as dependências (npm install);
- Execute o comando `npx cypress open`
- Clique no script `CT01.cy.js`

### Estrutura do projeto

Automation-API/
├── cypress/
│   ├── e2e/              # testes de ponta a ponta (E2E)
│   │   ├── CT01.cy.js
├── support/              # comandos customizados e configs globais
│   ├── support/          
│   │   └── e2e.js
│   └── fixtures/         # arquivos de dados mockados
├── node_modules/
├── package.json
├── README.md
└── cypress.config.js     # arquivo de configuração do Cypress


