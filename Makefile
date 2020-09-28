default: \
	greeting \
	start-test \
	start-app

greeting:
	echo "Loading . . . ."

start-test:
	npm run test

start-app:
	docker-compose -f docker-compose.yml -p cat-backend up -d
