import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: []
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
    addLocation(state, location) {
      state.locations.unshift(location);
    }
  },
  actions: {
    async fetchLocations({ commit }) {
      const res = await axios.get('/locations');
      commit('setLocations', res.data);
    },
    async saveLocation({ commit }, location) {
      const res = await axios.post('/locations', location);
      commit('addLocation', res.data);
    }
  },
  getters: {
    allLocations: state => state.locations
  }
});
