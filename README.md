## Projeto de Teste para a plataforma AluraPic
### Destinado a aplicação da disciplina de Teste de Software II

## Iniciando um projeto node
```
npm init -y
```

## Instalação 
```
npm install cypress
```
## Abrindo o Cypress
```
npx cypress open
```
## Arquitetura

* Fixtures: É onde seus mocks são armazenados podendo ser utilizados em qualquer teste.<br/>
* Integrations: Aqui é o diretório onde criará seus arquivos de teste exemplo : app_spec.js ou .js .jsx .coffee .cjsx. <br/>
* Plugins: Com eles é possível trocar, modificar ou estender o comportamento interno do Cypress.
Exemplos de plugins: <br/>
Trocar variáveis de ambiente durante o processo de execução <br/>
Carregar arquivos utilizando a lib fs <br/>
* Support: Neste diretório é possível criar comandos que podem ser executados dentro dos testes ou sobrescrever comandos já existentes.
Exemplo de comandos:
- Comando para login ( Evitar duplicação de código)
- Comando para logout

## Exemplo de aplicação dos Comandos do Cypress

<https://example.cypress.io/>

## WebSite para realizar os primeiros testes e2e
<https://example.cypress.io/todo> 
