up: # サーバーを起動する
	docker compose up -d
down: # サーバーを落とす
	docker-compose down
build: # dockerのビルド
	sudo docker-compose build
migrate: # 差分マイグレートを実行
	docker-compose exec app rails db:migrate
console: # Railsコンソールを開く
	docker-compose exec app rails console
db: # DBコンソールを開く
	docker-compose exec app rails db
seed: # DBにseed適用する（アプリケーションサーバーのみ落とし、DB再構築）
	docker compose up -d
	docker-compose rm -fsv app
	docker compose exec rails db:migrate:reset
	docker compose exec rails db:seed
	docker compose up -d
init: # DBを空にする（アプリケーションサーバーのみ落とし、DB初期化）
	docker compose up -d
	docker-compose rm -fsv app
	docker compose exec rails db:migrate:reset
	docker compose up -d