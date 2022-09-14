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

## Dicas

CDN (Content Delivery Network) -> Servidores -> Exp: Amazon
Postgres permite armazenar JSON
SqLite permite armazenar JSON

Evitar numeros quebrados no banco
Banco de dados com valores decimais ou quebrados, ex: horas, em vez de salvar 1h e meia, salvar em minutos 90 min
preço 17.89, antes de passar pro banco multiplica por 100 e salva 1789 no banco, depois é só dividir por 100 dnv
