import Vue from 'vue';
import store from './store';
import MapView from './MapView.vue';

new Vue({
  store,
  render: h => h(MapView)
}).$mount('#app');