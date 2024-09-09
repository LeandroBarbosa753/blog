# Projeto Blog

![Repository size](https://img.shields.io/github/repo-size/LeandroBarbosa753/blog?color=blue) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=green)

## 🔍 Sobre o Projeto

Este projeto é uma API de blog construída com **TypeScript**, **Node.js**, **Express**, **Prisma** e **PostgreSQL**. A seguir estão os passos para configurar o ambiente de desenvolvimento.

## 🛠️ Tecnologias e Ferramentas Utilizadas

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,express,npm,docker,postgres,prisma,postman" />
  </a>
</p>

## 🐳 Docker

### Comandos Docker Essenciais

Aqui estão alguns comandos Docker úteis para gerenciar imagens e containers no projeto:

- **`docker`**: Mostra todas as opções e subcomandos disponíveis no Docker.

#### Gerenciamento de Containers

- **`docker ps`**: Lista as instâncias de containers que estão rodando no momento.
- **`docker ps -a`**: Lista todas as instâncias de containers, incluindo as que não estão em execução.

#### Gerenciamento de Imagens

- **`docker images`**: Lista todas as imagens Docker disponíveis no sistema.
- **`docker pull postgres`**: Baixa a imagem do Postgres sem iniciar um container.

#### Criação e Remoção de Containers

- **`docker create postgres`**: Cria uma instância do Postgres, baixando a imagem automaticamente se ela não estiver presente no sistema.
- **`docker rm postgres`**: Remove uma instância do Postgres, caso ela exista.

#### Execução de Containers

- **`docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=secret -d postgres`**: Cria e inicia uma nova instância do Postgres, mapeando a porta e definindo a senha de acesso.

## Iniciar Projeto

1. Inicialize o projeto com o comando:

   ```bash
   npm init -y
   ```

2. Instale as dependências funcionais do projeto, como **[express](https://expressjs.com/)**, **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** e **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**:

   ```bash
   npm install express jsonwebtoken bcryptjs
   ```

3. Instale as dependências de desenvolvimento:

   ```bash
   npm install typescript ts-node @types/node --save-dev
   ```

4. Inicialize o arquivo do TypeScript, o `tsconfig.json`, que é necessário para rodar o TypeScript:

   ```bash
   npx tsc --init
   ```

## Configurar o **[Prisma](https://www.prisma.io/)**

1. Instale o Prisma como uma dependência de desenvolvimento:

   ```bash
   npm install prisma --save-dev
   ```

2. Inicialize o Prisma. Isso criará um arquivo `.env` e a pasta `prisma` com as configurações do banco de dados:

   ```bash
   npx prisma init
   ```

## Configurar o **[PostgreSQL](https://www.postgresql.org/)** com **[Docker](https://www.docker.com/)**

1. Crie um container Docker com o PostgreSQL:

   ```bash
   docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=secret -d postgres
   ```

2. Acesse o container para interagir diretamente com o PostgreSQL:

   ```bash
   docker exec -it postgres psql -U postgres
   ```

3. Crie o banco de dados `blog`:

   ```sql
   create database blog;
   ```

4. No arquivo `.env`, faça as modificações necessárias, ajustando o usuário, senha e o nome do banco de dados:

   ```
   DATABASE_URL="postgresql://postgres:secret@localhost:5432/blog?schema=public"
   ```

## Configurar o Prisma Schema e Migrações

1. Após configurar os **models** no arquivo `schema.prisma`, realize a primeira migração para criar as tabelas no banco de dados:

   ```bash
   npx prisma migrate dev --name init
   ```

## Instalar Tipagens e Ferramentas de Desenvolvimento

Durante a importação das bibliotecas **express**, **jsonwebtoken** e **bcryptjs**, observe que elas não possuem tipagem nativa. Portanto, é necessário instalar as tipagens correspondentes como dependências de desenvolvimento:

```bash
npm install @types/express @types/jsonwebtoken @types/bcryptjs --save-dev
```

## Automatizar o Processo de Transpilação do TypeScript

Para evitar transpilação manual do TypeScript sempre que houver uma alteração, instale a biblioteca `tsx` como dependência de desenvolvimento:

```bash
npm install tsx --save-dev
```

Crie um script no arquivo `package.json` para iniciar o projeto em modo de desenvolvimento, com monitoramento automático das mudanças nos arquivos:

```json
"scripts": {
  "dev": "tsx watch ./src/main.ts"
}
```

Agora você pode iniciar o projeto com o comando:

```bash
npm run dev
```
