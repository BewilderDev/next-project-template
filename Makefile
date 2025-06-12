.PHONY: dev build prod down clean install up start stop bash

# Development commands
dev:
	docker compose up dev

# Build and run development
up:
	docker compose up --build dev

# Start development server
start:
	docker compose start dev

# Stop development server
stop:
	docker compose stop dev

# Shell into development container
bash:
	docker compose exec dev sh

# Build commands
build:
	docker compose build

# Production commands
prod:
	docker compose up prod

# Stop containers
down:
	docker compose down

# Clean up containers, images, and volumes
clean:
	docker compose down -v
	docker system prune -f

# Install dependencies
install:
	docker compose run --rm dev npm install

# Help command
help:
	@echo "Available commands:"
	@echo "  make up       - Build and start development server"
	@echo "  make start    - Start development server"
	@echo "  make stop     - Stop development server"
	@echo "  make bash     - Shell into development container"
	@echo "  make dev      - Start development server (with logs)"
	@echo "  make build    - Build Docker images"
	@echo "  make prod     - Start production server"
	@echo "  make down     - Stop all containers"
	@echo "  make clean    - Clean up Docker resources"
	@echo "  make install  - Install dependencies"
	@echo "  make help     - Show this help message" 