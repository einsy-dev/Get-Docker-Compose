## Run this script to generate docker-compose.yml

```bash
npx get-docker-compose
```

### Generated docker-compose.yml file

```bash
services:
  client:
    container_name: client
    build: ./client/
    environment:
      - PORT=3000
    ports:
      - 8080:3000
    restart: if-failed

  server:
    container_name: server
    build: ./server/
    environment:
      - PORT=8000
    ports:
      - 8001:8000
    restart: if-failed
    networks: backend

mongodb:
  container_name: mongodb
  image: mongodb:latest
  ports:
    - 27017:27017
  environment:
    MONGO_INITDB_ROOT_USERNAME: root
    MONGO_INITDB_ROOT_PASSWORD: root
  volumes:
    - mongodb_data:/data/db
  restart: always
  networks: backend


networks:
  backend:
    driver: bridge
```
