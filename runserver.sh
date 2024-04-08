#!/usr/bin/env bash

# Caminhando até o projeto django executando o virtualenv
cmd1="cd backend && source venv/bin/activate && cd CatalogoLivrosApi && python manage.py runserver"

# Caminhando até o projeto angular e executando
cmd2="cd frontend && ng serve"

# Executando os comandos em paralelo
bash -c "$cmd1" &
bash -c "$cmd2" &

# Aguardar a conclusão dos comandos
wait

