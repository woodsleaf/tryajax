# parcelpack

Go to root project and execute them:

`npm install -G yarn`  
`yarn global add parcel-bundler`  
`yarn init -y`  
OR  
`npm install -g parcel-bundler`  
`npm init -y`  

Уже создан index.html.
~~Далее создайте файлы `index.html` и `index.js`.~~

## Продакшен

`npm build`  
 or  
`parcel build entry.js`

## Запустите в режиме watch если у вас есть собственный сервер

`npm watch`  
or  
`parcel watch index.html`

## Запуск в режиме сервера

`npm start`  
or  
`parcel index.html`

Зайдите в браузере на страницу: [http://localhost:1234/](http://localhost:1234/)

## [Рецепты](https://ru.parceljs.org/recipes.html)

## Vue (Уже сделано пример для понимания)

1. Сначала нам нужно установить зависимости для Vue.

`npm install --save vue`  
`npm install --save-dev parcel-bundler`  

Или, если у вас установлен менеджер пакетов Yarn

`yarn add vue`  
`yarn add --dev parcel-bundler`  

2. Затем добавьте скрипт запуска в `package.json`

`// package.json`  
`"scripts": {`  
  `"start": "parcel index.html"`  
`}`  

## React

1. Сначала необходимо установить зависимости для React.

`npm install --save react`  
`npm install --save react-dom`  
`npm install --save-dev parcel-bundler`  
`npm install --save-dev babel-preset-env`  
`npm install --save-dev babel-preset-react`  

Или, если у вас установлен менеджер пакетов Yarn

`yarn add react`  
`yarn add react-dom`  
`yarn add --dev parcel-bundler`  
`yarn add --dev babel-preset-env`  
`yarn add --dev babel-preset-react`  

2. Как в примере с Vue.

### Литература `:)`

[1](https://ru.parceljs.org/getting_started.html)
[2](https://jonathanmh.com/using-vue-js-with-parcel-js-tutorial/?unapproved=656572&moderation-hash=f8050d6c158a440bbd6a7c929c428520#comment-656572)
