
import Vue from 'vue';
import store from './store';
import App from './App.vue';
import 'leaflet/dist/leaflet.css';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');