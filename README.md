# Task API

Esta é uma API de gerenciamento de tarefas construída com Node.js, Express e TypeScript.

## Instalação

npm install

npm run dev

A API estará acessível em http://localhost:3333

Endpoints

1. Criar Tarefa
   Endpoint:

POST /tasks

Corpo da Requisição (JSON):

{
"title": "Nome da Tarefa"
}

Resposta de Sucesso:
{
"id": 1,
"title": "Nome da Tarefa"
}

2. Listar Todas as Tarefas

Certamente! Abaixo está um exemplo simples de um arquivo README.md para o seu projeto, incluindo informações sobre os endpoints disponíveis:

markdown
Copy code

# Task Management API

Esta é uma API de gerenciamento de tarefas simples construída com Node.js, Express e TypeScript.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   Instale as dependências:
   ```

bash
Copy code
cd seu-repositorio
npm install
Execute a aplicação:

bash
Copy code
npm start
A API estará acessível em http://localhost:3000.

Endpoints

1. Criar Tarefa
   Endpoint:

POST /tasks

Corpo da Requisição (JSON):

json
Copy code
{
"title": "Nome da Tarefa"
}
Resposta de Sucesso:

json
Copy code
{
"id": 1,
"title": "Nome da Tarefa"
}
Resposta de Erro:

json
Copy code
{
"error": "Mensagem de erro"
} 2. Listar Todas as Tarefas
Endpoint:

GET /tasks

Resposta de Sucesso:
[
{
"id": 1,
"title": "Tarefa 1"
},
{
"id": 2,
"title": "Tarefa 2"
},
...
]

3. Excluir Tarefa
   Endpoint:

DELETE /tasks/:id

Resposta de Sucesso:

204 No Content

Resposta de Erro:
{
"error": "Tarefa não encontrada"
}

4. Atualizar Tarefa
   Endpoint:

PUT /tasks/:id

Corpo da Requisição (JSON): 4. Atualizar Tarefa
Endpoint:

PUT /tasks/:id

Corpo da Requisição (JSON):
{
"title": "Novo Nome da Tarefa"
}
