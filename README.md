<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".gitEcoleta/logo.svg">
    <br><br>
   <strong><h2> :recycle: Ecoleta</h2>Marketplace de coleta de resíduos.</strong>  
    <br>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/designed -Rocketseat-blueviolet?style=for-the-badge">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blueviolet?style=for-the-badge">
  <br><br>
</p>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O projeto tem como finalidade **estabelecer uma conexão** entre **empresas e/ou entidades que coletam resíduos** (orgânicos e inorgânicos) **às pessoas e/ou entidades que 
necessitam constantemente descartar esses resíduos**. Solucionando um grande problema recorrente que é o **descarte inadequado do lixo**, facilitando o processo de 
recliclagem e reutilização.

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :computer: Web

<h1 align="center">
    <img alt="Web" src=".gitEcoleta/Video.gif">
</h1>

## :iphone: Mobile

<h1 align="center">
    <img alt="Mobile Home" src=".gitEcoleta/home-mobile.svg" width="300px">
    <img alt="Mobile Detail" src=".gitEcoleta/detalhes-mobile.svg" width="300px">
</h1>

<a id="como-usar"></a>

## :heavy_check_mark: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/brunoduartelima/Ecoleta.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ cd backend
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Inicie a aplicação web
  $ cd frontend
  $ npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ npm start
```

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## :mortar_board: Quem ministrou?

Aulas ministradas por **[Diego Fernandes](https://github.com/diego3g)**. **Next Level Week: Booster**.

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

