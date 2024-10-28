#Frontend:
make run
ЛИБО
npx expo start

#Backend
make run
ЛИБО
docker-compose up -d & go run cmd/main.go

Также для Backend необходимо сделать миграцию командой:  make migrate
