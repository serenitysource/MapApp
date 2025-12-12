<template>
  <div id="map" style="height: 400px;"></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'MapView',
  mounted() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', this.onMapClick);
  },
  methods: {
    onMapClick(e) {
      L.marker(e.latlng).addTo(this.map);
      // Here you would call a method to reverse geocode and save the location
      // For now, just log the coordinates
      console.log('Clicked at:', e.latlng);
    }
  }
};
</script>

<style>
#map { width: 100%; height: 400px; }
</style>
