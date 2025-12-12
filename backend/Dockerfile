# Backend Dockerfile
FROM node:20-alpine
WORKDIR /app
# Install build tools and SQLite for sqlite3 npm package
RUN apk add --no-cache python3 make g++ sqlite
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]