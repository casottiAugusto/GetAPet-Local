# 🐾 GetAPet

Sistema completo para adoção de animais de estimação, conectando pessoas que desejam adotar pets com aqueles que precisam encontrar um novo lar para seus animais.

## 📋 Sobre o Projeto

GetAPet é uma plataforma web desenvolvida para facilitar o processo de adoção de animais de estimação. O sistema permite que usuários cadastrem pets disponíveis para adoção, visualizem animais disponíveis e gerenciem todo o processo de adoção de forma simples e intuitiva.

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** com **Express** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT (jsonwebtoken)** - Autenticação e autorização
- **bcrypt** - Criptografia de senhas
- **Multer** - Upload de imagens
- **CORS** - Configuração de requisições cross-origin
- **Cookie-parser** - Gerenciamento de cookies

### Infraestrutura
- **Docker** & **Docker Compose** - Containerização
- **MongoDB 6** - Banco de dados em container
- **Mongo Express** - Interface administrativa do MongoDB

## 📁 Estrutura do Projeto

```
GetAPet-Local/
├── backend/
│   ├── Controller/        # Controladores da aplicação
│   ├── models/           # Modelos do banco de dados
│   │   ├── User.js      # Modelo de usuário
│   │   └── Pets.js      # Modelo de pets
│   ├── routes/          # Rotas da API
│   ├── helpers/         # Funções auxiliares
│   ├── db/              # Configuração do banco de dados
│   ├── public/          # Arquivos estáticos e uploads
│   ├── docker-compose.yml
│   ├── index.js         # Ponto de entrada da aplicação
│   └── package.json
└── frontend/            # Interface do usuário (em desenvolvimento)
```

## 🔧 Funcionalidades

### Usuários
- ✅ Cadastro de usuários
- ✅ Autenticação com JWT
- ✅ Perfil de usuário com foto
- ✅ Gerenciamento de dados pessoais

### Pets
- 📝 Cadastro de pets para adoção
- 📸 Upload de múltiplas imagens
- 🔍 Listagem de pets disponíveis
- ✨ Informações detalhadas (nome, idade, peso, cor)
- 🤝 Sistema de adoção
- 👤 Vinculação com dono e adotante

## 🐳 Configuração com Docker

O projeto utiliza Docker Compose para facilitar a configuração do ambiente de desenvolvimento:

### Serviços Disponíveis
- **MongoDB** - Porta 27017
- **Mongo Express** - Porta 8081 (Interface administrativa)

### Iniciar os serviços:
```bash
cd backend
docker-compose up -d
```

### Parar os serviços:
```bash
docker-compose down
```

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js (v14 ou superior)
- Docker e Docker Compose
- npm ou yarn

### Passos para instalação:

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd GetAPet-Local
```

2. **Inicie o MongoDB com Docker**
```bash
cd backend
docker-compose up -d
```

3. **Instale as dependências**
```bash
npm install
```

4. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na pasta backend com:
```env
MONGODB_URI=mongodb://admin:secret@localhost:27017/getapet?authSource=admin
JWT_SECRET=seu_secret_aqui
PORT=5000
```

5. **Inicie o servidor**
```bash
npm start
```

O servidor estará rodando em `http://localhost:5000`

## 🔐 Segurança

- Senhas criptografadas com bcrypt
- Autenticação baseada em JWT
- Validação de dados no backend
- CORS configurado para ambiente de desenvolvimento

## 📡 API Endpoints

### Usuários
- `POST /users/register` - Cadastro de novo usuário
- `POST /users/login` - Login
- `GET /users/profile` - Perfil do usuário autenticado
- `PATCH /users/profile` - Atualizar perfil

### Pets
- `POST /pets` - Cadastrar pet para adoção
- `GET /pets` - Listar todos os pets
- `GET /pets/:id` - Detalhes de um pet
- `PATCH /pets/:id` - Atualizar informações do pet
- `DELETE /pets/:id` - Remover pet
- `PATCH /pets/adopt/:id` - Adotar um pet

## 🌐 Mongo Express

Interface administrativa disponível em `http://localhost:8081`
- Usuário: `admin`
- Senha: `secret`

## 📝 Modelo de Dados

### User (Usuário)
```javascript
{
  name: String,
  email: String,
  password: String (criptografada),
  image: String,
  phone: String,
  timestamps: true
}
```

### Pet
```javascript
{
  name: String,
  age: Number,
  color: String,
  weight: Number,
  images: Array,
  available: Boolean,
  user: Object,      // Dono do pet
  adopter: Object,   // Adotante
  timestamps: true
}
```

## 🚧 Status do Projeto

🔨 **Em desenvolvimento ativo**

### Implementado
- ✅ Backend com Express
- ✅ Modelos de dados
- ✅ Sistema de autenticação
- ✅ Upload de imagens
- ✅ Docker para MongoDB

### Em desenvolvimento
- 🔄 Frontend
- 🔄 Rotas de pets
- 🔄 Sistema completo de adoção

## 👥 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

ISC

---

Desenvolvido com ❤️ para ajudar animais a encontrarem um lar!