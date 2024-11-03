# Gerenciador de Tarefas

Este é um projeto de um gerenciador de tarefas desenvolvido com ReactJS, TypeScript, Easy-Peasy e Axios. A aplicação permite criar, ler, atualizar e excluir tarefas (CRUD).

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Easy-Peasy**: Biblioteca para gerenciamento de estado.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **MockAPI**: Serviço para simular uma API REST.

## Funcionalidades

- Criar novas tarefas.
- Listar todas as tarefas cadastradas.
- Editar tarefas existentes.
- Deletar tarefas.

## Pré-requisitos

Para testar a aplicação, você precisará criar uma conta no MockAPI:

1. Acesse [MockAPI](https://mockapi.io/).
2. Crie um novo projeto e adicione uma nova rota com o prefixo `/api/todos`.
3. Configure a rota para incluir os campos necessários (por exemplo, `id`, `title`, `completed`).
4. Troque a url no arquivo /tasks/model

## Instruções de Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/luanmas/user-crud-LTAP.git
   cd todo-crud-LTAP

2. Instale as dependencias (Utilize o npm de preferência)
   ```bash
   npm i
   npm run dev
