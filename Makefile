# Makefile para subir a aplicação

# Comandos de execução
run-frontend:
	@echo "Iniciando o servidor frontend..."
	cd frontend && ng serve

run-backend:
	@echo "Iniciando o servidor backend..."
	cd backend && source venv/bin/activate && cd CatalogoLivrosApi && python manage.py runserver

start:
	@echo "Iniciando a aplicação..."
	@make -j2 run-frontend run-backend

stop:
	@echo "Parando a aplicação..."
	@pkill -f "ng serve"
	@pkill -f "python manage.py runserver"

