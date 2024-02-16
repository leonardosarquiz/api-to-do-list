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

json
Copy code
{
"title": "Nome da Tarefa"
}

2. Listar Tarefas
   GET /tasks

3. Excluir Tarefa
   Endpoint:

DELETE /tasks/:id

4. Atualizar Tarefa
   Endpoint:

PUT /tasks/:id

json
Copy code
{
"title": "Nome da Tarefa"
}
