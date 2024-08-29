npm init -y

npm install express jsonwebtoken bcryptjs

npm install typescript ts-node @types/node --save-dev

npm i prisma -d 

npx tsc --init

npx prisma init

docker (APARECE TODAS AS OPÇÕES)
docker ps (LISTA A INST NCIAS QUE ESTÃO RODANDO)
docker ps -a (LISTA TODAS AS INST NCIAS)
docker images (LISTA TODAS AS IMAGENS EXISTENTES)
docker pull postgres (BAIXA A IMAGEM APENAS)
docker create postgres (CRIA UMA INST NCIA DO POSTGRES, BAIXANDO A IMAGEM AUTOMATICAMENTE)
docker rm postgres (PARA APAGAR INST NCIA CASO EXISTA)
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=secret -d postgres (PARA CRIAR A INST NCIA)

docker run -e POSTGRES_PASSWORD=secret postgres
npx prisma migrate dev --name init

para iniciar o container usamos --> docker start [container_id]

para entrar no docker --> docker exec -it postgres psql -U postgres




11:23 - erro nas bibliotecas, pois ela não tem tipagem então tem que instalar as tipagens -->

npm install @types/express @types/jsonwebtoken @types/bcryptjs --save-dev


para não ficar transpilando typescript, tem uma biblioteca chamada tsx

npm install tsx --save-dev

criar script no package.json -

    "dev": "tsx watch ./src/main.ts"


30:49 Prisma client, pois quando haver mais de uma requisão ele vai abrir várias conecxões com o banco de dados o que vai atrapalhar

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)