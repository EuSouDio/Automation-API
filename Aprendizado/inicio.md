
# 🚀 Guia de Início - Automação com Cypress

Este documento apresenta os requisitos, instalação e execução de testes automatizados utilizando **Cypress**.

---

## ✅ Requisitos

Antes de rodar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/) (versão **LTS** recomendada. Utilizada no projeto **v22.16.0**)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/downloads) (para versionamento e clone do projeto)
- Editor de código (recomendado: [Visual Studio Code](https://code.visualstudio.com/))
- Cypress versão utilizada **14.5.2**. 

---
## 🖥 Na sua maquina

Siga os passos:

1 - Crie uma pasta para seu projeto;

Acesse a pasta do projeto:
```
cd sua-pasta
```

2 - Crie o arquivo de configurções "package.json" com o comando:

```
bash
npm init -y
```
---
## 🌐 Instalação do Cypress

3 - Caso ainda não tenha o Cypress instalado:
```
npm install cypress --save-dev
```

ou com Yarn:
```
yarn add cypress --dev
```
---
## ▶️ Executando os Testes

4 - Crie a estrutura de pastas no Cypress, executando o comando e seguindo com as configurações básicas:

Abrir o Cypress em modo interativo (UI):

```
bash
npx cypress open
```

Rodar os testes em modo headless (linha de comando):

```
bash
npx cypress run
```


Segue estrutura como ficará

## 📁 Estrutura básica do projeto Cypress
```
cypress/
  ├── e2e/           # testes de ponta a ponta (E2E)
  ├── fixtures/      # arquivos de dados mockados
  ├── support/       # comandos customizados e configs globais
  └── reports/       # relatórios de execução (se configurado)
cypress.config.js    # arquivo de configuração do Cypress
```

```
/cypress
  └── /e2e     ← onde você colocará seus testes
```

Agora voce tem um teste modelo do cypress executando com sucesso!
A seguir vamos implementar novos testes do projeto.



