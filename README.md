## Run this script to generate docker-compose.yml

```bash
npx get-docker-compose
```

## Generated simple docker-compose.yml file

```bash
services:
  client:
    container_name: client
    build: ./client/
    env_file:
      - .env
    ports:
      - 8080:3000
    restart: always

  server:
    container_name: server
    build: ./server/
    env_file:
      - .env
    ports:
      - 8001:8000
    restart: always
```
