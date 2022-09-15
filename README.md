# NlwEsports

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Back-end

## Entidades

games = 1  game -> * anuncios
anuncios = 1 anuncio -> 1 game
  - 1 anuncio sempre vai pertencer a um anuncio

## Game 

id
title
bannerUrl

## Ad

id
gameId
name
yearPlaying
discord
weekDays
hourStart
hourEnd
usaVoiceChannel
createdAt

## Casos de Uso
Como o usuário vai se relacionar/ utilizar a nossa aplicação
Quais açoes ele pode fazer dentro
Cada caso de uso, vira uma rota dps, cada comunicaçao do back com o front vira um caso de uso

- Listagem de games com contagem de anuncio
- Criaçao de novo anúncio
- Listagem de anúncios por games
- Buscar discord pelo ID do anúncio

## Dicas

CDN (Content Delivery Network) -> Servidores -> Exp: Amazon
Postgres permite armazenar JSON
SqLite permite armazenar JSON

Evitar numeros quebrados no banco
- Banco de dados com valores decimais ou quebrados, ex: horas, em vez de salvar 1h e meia, 
salvar em minutos 90 min
- preço 17.89, antes de passar pro banco multiplica por 100 e salva 1789 no banco, depois é só dividir por 100 dnv
- evitar id numerico, dependendo da aplicaçao pode ser menos seguro
  - por ser sequencial, uma pessoa pode adquirir uma informaçao chutando um id
  - algoritmos para gerar id -> uuid, cuid (simples), snowflake criado pelo twitter por causa desse problema

rotas na url sempre no plural

Http Codes começa com 200 sucesso, 300 redirecionamento, 400 erro gerado na nossa aplicaçao, 
500 erros inesperados

Tipos de parametros
- Query -> parametros que vem atraves do ? localhost:3333/ads?page=2&sort=title
  - são utilizados quando precisamos persistir estado atual da página/momento (usado para filtros, ordenaçao, paginaçao e para informaçoes que nao sao sensivel, já pensou mandar no query o cpf do maluco)
  - parametros que ficam disponiveis na url
- Route -> parametros da url, porem nao sao nomeados localhost:3333/ads/5
  - slug: localhost:3333/post/como-criar-uma-api-em-node
- Body -> enviar várias informaçoes em uma unica requisição, geralmente para envio de formulario
  - fica escondido 
  - mais recomendado para informaçoes sensiveis, cadastro de senha

Prisma -> hibernate do ts
  - npm i prisma -D -> para desenvolvimento
  - npx prisma init --datasource-provider sqlite
  - npx prisma migrate dev
    - uma migration é = git para o banco de dados
  - npx prisma studio -> cria uma interface grafica para navegar no banco
    - só funciona dentro da pasta prisma
  - possui alguns geradores automaticos
  - prisma como produçao ->  npm i @prisma/client

para o react
  - headless
  - ariakit
  - radix

config no package.json para o express reiniciar sozinho 
"dev": "tsnd --exit-child src/server.js",
  - '--exit-child' é para o prisma


