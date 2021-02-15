import Vue from 'vue'
import Vuex from 'vuex'
import products from './products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pswEnc: 'Q29udHJvbFRlY2gyMDIx',
    authorized: false,
    title: 'Rockwell Automation software products overview',
    licenses: {
      'C0': 'Subscription / Self Support',
      'C1': 'Subscription / 8-5, M-F Support',
      'C2': 'Subscription / 24x7 Support',
      'M0': 'Perpetual / Self Support',
      'M1': 'Perpetual / 8-5, M-F Support',
      'M2': 'Perpetual / 24x7 Support'
    }
  },
  getters: {
    getTitle: state => state.title
  },
  mutations: {
    setAuthorized (state, value) {
      state.authorized = value
      window.localStorage.setItem('controlTechAuthorized', value ? 'true' : 'false')
    }
  },
  actions: {
  },
  modules: {
    products
  }
})
