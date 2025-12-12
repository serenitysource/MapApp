<template>
  <div id="app">
    <h1>MapApp</h1>
    <div id="map" style="height: 400px;"></div>
    <div v-if="selectedAddress">
      <h3>Selected Address:</h3>
      <p>{{ selectedAddress }}</p>
      <button @click="saveLocation">Save Location</button>
    </div>
    <div>
      <h3>Saved Locations</h3>
      <div class="locations-scroll">
        <ul>
          <li v-for="loc in locations" :key="loc.id">
            {{ loc.address }} ({{ loc.lat }}, {{ loc.lng }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import L from 'leaflet';
import axios from 'axios';
import customMarkerIcon from './customMarkerIcon';

export default {
  name: 'App',
  data() {
    return {
      map: null,
      marker: null,
      selectedLatLng: null,
      selectedAddress: '',
      locations: []
    };
  },
  mounted() {
    console.log('Page loaded: Vue app mounted');
    this.initMap();
    this.fetchLocations();
  },
  methods: {
    // Initialize the Leaflet map and set up click handler
    initMap() {
      // Sydney, Australia: latitude -33.8688, longitude 151.2093
      this.map = L.map('map').setView([-33.8688, 151.2093], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(this.map);
      this.map.on('click', this.onMapClick);
    },

    // Handle map click: place marker and reverse geocode address
    async onMapClick(e) {
      console.log('Map clicked at:', e.latlng);
      this.selectedLatLng = e.latlng;
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker(e.latlng, { icon: customMarkerIcon }).addTo(this.map);
      // Reverse geocode to get address
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`;
      const res = await axios.get(url);
      this.selectedAddress = res.data.display_name || 'Unknown address';
    },

    // Save the selected location to the backend
    async saveLocation() {
      if (!this.selectedLatLng || !this.selectedAddress) return;
      console.log('Saving location:', {
        address: this.selectedAddress,
        lat: this.selectedLatLng.lat,
        lng: this.selectedLatLng.lng
      });
      await axios.post('http://localhost:3000/locations', {
        address: this.selectedAddress,
        lat: this.selectedLatLng.lat,
        lng: this.selectedLatLng.lng
      });
      this.fetchLocations();
    },

    // Fetch all saved locations from the backend
    async fetchLocations() {
      const res = await axios.get('http://localhost:3000/locations');
      this.locations = res.data;
    }
  }
};
</script>

<style scoped>
.locations-scroll {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fafbfc;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f6f8fa;
  margin: 0;
}

#app {
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 32px 28px 28px 28px;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 18px;
  color: #2c3e50;
  letter-spacing: 1px;
}

#map {
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.07);
  border: 1px solid #e0e0e0;
}

button {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 18px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}
button:hover {
  background: #125ea2;
}

h3 {
  margin-top: 28px;
  margin-bottom: 10px;
  color: #1976d2;
  font-size: 1.1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  background: #f3f6fa;
  margin-bottom: 8px;
  padding: 10px 14px;
  border-radius: 5px;
  color: #333;
  font-size: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}

.selected-address {
  background: #e3f2fd;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 10px;
  color: #1565c0;
  font-weight: 500;
}
</style>
