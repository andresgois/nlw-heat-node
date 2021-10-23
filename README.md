

### Dependências
- npm i express
- npm i @types/express typescript ts-node-dev
- yarn add prisma -D
- yarn add dotenv
- yarn add axios
- yarn add @types/axios -D
- yarn add jsonwebtoken
- yarn add @types/jsonwebtoken -D
- yarn add socket.io
- yarn add @types/socket.io -D
- yarn add cors
- yarn add @types/cors -D

### Configurações
- sudo apt install node-typescript
- tsc --init
- npm install -g yarn
- **Instalar NVM**
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
- yarn prisma init

### Autenticação via github
- https://github.com/settings/developers


### AuthenticateUserService

- Receber code(string)
- Recuperar o access_token no github
- Recuperar infos do user no github
- Verificar se o usuário existe no DB
- -------- SIM = Gera um token
- -------- NÃO = Cria no DB, gera um token
- Retornar o token com as infos do user


### Comandos prisma
- yarn prisma migrate dev
- yarn prisma studio
