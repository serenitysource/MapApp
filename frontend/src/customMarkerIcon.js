import L from 'leaflet';


// Use a local marker image from public/map-marker.gif
const customMarkerIcon = new L.Icon({
  iconUrl: '/map-marker.gif', // served from public/
  iconSize: [30, 48],
  iconAnchor: [15, 48],
  popupAnchor: [1, -34],
  //shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  //shadowSize: [41, 41]
});

export default customMarkerIcon;
