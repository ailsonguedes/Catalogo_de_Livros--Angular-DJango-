<h1 align='center'> Catálogo de Livros </h1>

<p align='center'>Esta é uma aplicação de catálogo de livros desenvolvida com Django Rest Framework(backend) e Angular(frontend), foi projetada para armazenar informações sobre livros, incluindo nome do livro, nome do autor, ano de lançamento e número da edição.
Você também poderá buscar os livros por gênero, nome do autor, nome do livro, tipo ou nome da editora.</p>

<div align='center'>
  <a href="https://www.djangoproject.com/" target="_blank">
      <img src="./img/django_logo.png" width="150" height="150" />
  </a>

  <a href="https://angular.io/" target="_blank">
      <img src="./img/angular_logo.png" width="150" height="150" />
  </a>
</div>

## 🔧 Ferramentas

-   Django: framework de desenvolvimento web de código aberto, escrito em Python, que oferece uma estrutura robusta e eficiente para a criação de aplicativos web.
-   Angular: é um poderoso framework para desenvolvimento web para javascript, altamente poderoso e escalável.

## 📍 Endpoints

- `GET /livro/`: Retorna a lista de todos os livros no catálogo.
- `POST /livro/`: Cria um novo livro no catálogo.
- `GET /livro/{id}/`: Retorna os detalhes de um livro específico com base no ID.
- `PUT /livro/{id}/`: Atualiza as informações de um livro específico com base no ID.
- `GET /livro/?search={param}/`: Retorna os detalhes de livros baseado em parametros que podem ser: `genero`, `nome do autor`, `nome do livro`, `editora` ou `tipo`.
- `DELETE /livro/{id}/`: Exclui um livro específico com base no ID.

## 📄 Modelos de Dados

- `Livro`:
  - `id` (campo automático): O identificador único do livro.
  - `nome` (string): Nome do livro.
  - `nomeDoAutor` (string): Nome do autor do livro.
  - `lancamento` (inteiro): Ano de lançamento da primeira versão do livro.
  - `numEdicao` (inteiro): Número da edição do livro.
  - `tipo` (string): Tipo do livro (livro, mangá, hq...).
  - `genero` (string): Genero do livro.
  - `editora` (string): Nome da editora.
  - `anoEdicao` (inteiro): Ano de lançamento da edição.
  - `numEdicao` (inteiro): Numero da edição.

## ⚙️ Uso da API

A API pode ser usada para:

- Listar todos os livros no catálogo.
- Adicionar um novo livro ao catálogo.
- Recuperar detalhes de um livro específico com base no ID.
- Recupera detalhes de livros com base em seu nome, nome do autor, genero, tipo ou editora
- Atualizar informações de um livro existente.
- Excluir um livro específico do catálogo.

## 💻 Como Executar o Projeto

Siga estas etapas para configurar e executar a API em seu ambiente:

1. Clone este repositório:

  ```shell
  git clone https://seurepositorio.git
  ```
2. Navegue até o diretório do projeto:

  ```shell
  cd nomedoprojeto/
  ```
3. Crie e ative um ambiente virtual:

  ```shell
  cd backend
  python -m venv venv
  source venv/bin/activate  # No Windows, use 'venv\Scripts\activate'
  ```
4. Instale as dependências:

  ```shell
  pip install -r requirements.txt
  ```
5. Execute as migrações do banco de dados:

  ```shell
  python manage.py migrate
  ```
6. Inicie o servidor de desenvolvimento:

  ```shell
  python manage.py runserver
  ```
7. Inicie a aplicação no Angular:
    ```shell
    cd frontend
    ng serve
    ```
O backend provavelmente estará rodando na porta `127.0.0.1:8000` do seu localhost enquando o frontend deve estar rodando na porta `4200`.

## 🙏 Contribuição:

Contribuições são bem-vindas! Sinta-se à vontade para enviar problemas, solicitações de pull e feedback.
