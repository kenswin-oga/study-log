up:
	docker compose up -d
build:
	docker compose build
down:
	docker compose down
migrate:
	docker compose exec web bin/rails db:migrate
dev:
	docker compose exec web yarn build
	docker compose exec web yarn build:css
stop:
	docker compose stop
reboot:
	docker compose down
	docker compose build
	docker compose up -d
destroy:
	docker compose down --rmi all --volumes
ps:
	docker compose ps
.PHONY: web
web:
	docker compose exec web bash