.PHONY: help build up down test lint migrate run-audit collect-evidence generate-report

help:
	@echo "Internal Audit Bot - Management Commands"
	@echo "--------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "run-audit       : Execute audit scan"
	@echo "collect-evidence: Automated evidence collection"
	@echo "generate-report : Create audit-ready PDF/JSON report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

run-audit:
	docker-compose exec api python scripts/audit/run_scan.py

collect-evidence:
	docker-compose exec api python scripts/collect/gather_assets.py

generate-report:
	docker-compose exec api python scripts/report/generate_audit_doc.py
