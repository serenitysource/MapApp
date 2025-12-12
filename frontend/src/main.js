
import Vue from 'vue';
<<<<<<< HEAD
import store from './store';
import MapView from './MapView.vue';

new Vue({
  store,
  render: h => h(MapView)
=======
import App from './App.vue';
import 'leaflet/dist/leaflet.css';

new Vue({
  render: h => h(App)
>>>>>>> 9f564a13e6f0aab8efc1c573e7779e021f9fef34
}).$mount('#app');