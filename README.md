# Automation-API
O projeto bseia-se na API referente a pagina https://automationexercise.com/api_list
teste

Se seu projeto será do Zero:

1 - Crie o arquivo de configurções "pckage.json" com o comando:
```
bash
npm init -y
```

2 - Instale o Cypress com o comando:
```
bash
npm install cypress --save-dev
```
3 - Crie a estrutura de pastas no Cypress, executando o comando e seguindo com as configurações básicas:
```
bash
npx cypress open
```
Segue escrutura
```
/cypress
  └── /e2e     ← onde você colocará seus testes
```

4 - Execução dos testes:
Há duas formas, via interface e via prompt de comando;
a - Via interface;
- execute o comando:
```
bash
npx cypress open
``` 
e escolha o script de testes;

b - Via cmd.
- execute o comando na pasta do script:
```
bash
npx cypress run --e2e
```
