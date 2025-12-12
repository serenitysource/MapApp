# MapApp

## Project Overview

MapApp is a simple map application that allows users to select a location on a 2D map, save the address to a database, and view all previously selected addresses. The app is built with a Vue.js frontend, Node.js/Express backend, and SQLite database, all containerized with Docker for easy deployment.

## Project Structure

```
MapApp/
├── backend/                    # Node.js/Express API, SQLite DB
│   ├── db.js                   # SQLite database logic
│   ├── index.js                # Express server and API routes
│   ├── package.json            # Backend dependencies
│   └── Dockerfile              # Backend Dockerfile
├── frontend/                   # Vue.js (Vuex, Leaflet.js)
│   ├── public/
│   │   └── index.html          # Main HTML template
│   ├── src/
│   │   ├── App.vue             # Main Vue component
│   │   ├── main.js             # Vue entry point
│   │   └── customMarkerIcon.js # Custom Leaflet marker icon
│   ├── babel.config.js         # Babel config for Vue
│   ├── package.json            # Frontend dependencies
│   └── Dockerfile              # Frontend Dockerfile
├── docker-compose.yml          # Docker Compose orchestration
├── README.md                   # Project documentation
```

## Getting Started (Docker)

1. Clone the repository
2. Run `docker-compose up --build`
3. Access the frontend at http://localhost:8081
4. Backend API runs at http://localhost:3000

## Sprint 1: Scaffold & Docker Setup
- [x] Create backend and frontend folders
- [x] Add Dockerfiles for both
- [x] Add docker-compose.yml
- [x] Add initial package.json files
- [x] Initialize backend and frontend codebases
- [x] Test Docker build and container startup

## Status

Backend and frontend containers are running. Ready to implement map UI and connect to backend API.

## Sprint 2: Map UI & API Integration
- [x] Add Vuex store to frontend
- [x] Integrate Leaflet.js for map and pin drop
- [x] Connect frontend to backend API (save/retrieve locations)
- [x] Test full flow: drop pin, save, and view locations

## Frontend Framework

The frontend uses Vue.js, a progressive JavaScript framework ideal for building interactive user interfaces. Vue is lightweight, component-based, and easy to integrate with other libraries. In this project, Vue is combined with Leaflet.js for map rendering and Axios for HTTP requests, providing a modern, responsive, and maintainable UI for the map application.

## Backend Framework

The backend is built with Node.js and Express, a fast and minimalist web framework for building RESTful APIs. Express simplifies server setup, routing, and middleware integration, making it ideal for lightweight, scalable applications. In this project, it handles API requests and manages data storage using SQLite for simplicity and portability.

## Why Docker Containerization?

Docker was adopted to ensure consistent, reproducible environments for both development and deployment. Containerization simplifies setup by packaging the application and its dependencies, eliminating "it works on my machine" issues. It enables easy orchestration of the frontend, backend, and database services, streamlines updates, and supports rapid scaling or migration to different platforms without manual reconfiguration.

## Database Location and Updates

The SQLite database runs inside the backend Docker container, stored as a file within that container. It is a file-based database, so all data is saved to this file. The database is only updated when the backend application sends an SQL request (such as insert, update, or delete). No changes are made to the database file unless an SQL operation is performed by the backend code in response to API requests.

## Author

**Name:** Adi (or your preferred name)
**Contact:** [your.email@example.com]
**GitHub:** [https://github.com/serenitysource/MapApp](https://github.com/serenitysource/MapApp)
**Year:** 2025

