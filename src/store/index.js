import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    filteredCountries: [],
    loading: true,
    selectedArea: ''
  },
  mutations: {
    setCountries (state, countries) {
      state.countries = countries;
      state.loading = false;
      state.filteredCountries = state.countries
    },

    // filterCategories (state) {
    //   state.filteredCountries.filter((country) => {
    //     return country.region.toLowerCase().match(state.selectedArea.toLowerCase())
    //   })
    // }
  },
  actions: {
    fetchCountries ({ commit }) {
        axios
          .get('https://restcountries.com/v2/all')
  
          .then(response => response.data)
          .then(countries => {
            commit('setCountries', countries)
          })
    },

    // filterCategories({ commit }) {
    //   commit('filterCategories')
    // }

  },
  modules: {
  }
})
