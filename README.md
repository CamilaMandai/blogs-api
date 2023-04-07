Neste projeto desenvolvi uma API e um banco de dados MySql para a produção de conteúdo para um blog.

Trata-se de uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

1. Os endpoints são conectados ao banco de dados seguindo os princípios do REST;

2. Para fazer um post é necessário usuário e login, portanto existe uma **relação entre** `user` e `post`; 

3. Os posts possuem categorias e portanto existe a relação de `posts` para  `categories` e de `categories` para `posts`.
  
  ## Orientações ##

Você pode rodar a aplicação localmente ou utilizando containers em docker para o node e o banco 
 
 ### Se optar pelo Docker ###
 
 **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior**
 > Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;
  - A partir daqui você pode rodar o container `blogs_api` via CLI com o comando:

> `docker exec -it blogs_api bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

 > A partir do terminal do docker, instale as dependências com `npm install`
 > Inicie a aplicação com npm start
  
 - **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container

  ### Se optar por rodar a aplicação localmente  ###

  > Instale as dependências com `npm install`
  > Inicie a aplicação com npm start
