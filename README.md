# MapApp

## Project Overview
MapApp is a simple map application that allows users to select a location on a 2D map, save the address to a database, and view all previously selected addresses. The app is built with a Vue.js frontend, Node.js/Express backend, and SQLite database, all containerized with Docker for easy deployment.

## Project Structure

```
MapApp/
├── backend/      # Node.js/Express API, SQLite DB
│   └── Dockerfile
├── frontend/     # Vue.js (Vuex, Leaflet.js)
│   └── Dockerfile
├── docker-compose.yml
├── README.md
```

## Getting Started (Docker)

1. Clone the repository
2. Run `docker-compose up --build`
3. Access the frontend at http://localhost:8080
4. Backend API runs at http://localhost:3000

## Sprint 1: Scaffold & Docker Setup
- [x] Create backend and frontend folders
- [x] Add Dockerfiles for both
- [x] Add docker-compose.yml
- [x] Add initial package.json files
- [ ] Initialize backend and frontend codebases
- [ ] Test Docker build and container startup

## Next Steps
- Initialize Express backend and Vue.js frontend
- Implement REST API and map UI
- Document decisions and update README.md
