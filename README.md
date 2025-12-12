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
- [x] Initialize backend and frontend codebases
- [x] Test Docker build and container startup

## Sprint 2: Map UI & API Integration
- [ ] Add Vuex store to frontend
- [ ] Integrate Leaflet.js for map and pin drop
- [ ] Connect frontend to backend API (save/retrieve locations)
- [ ] Test full flow: drop pin, save, and view locations

## Status
Backend and frontend containers are running. Ready to implement map UI and connect to backend API.
