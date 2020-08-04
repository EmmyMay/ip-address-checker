import {
  createStore
} from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    dnsData: null
  },

  getters: {
    getdnsdata: state => state.dnsData
  },

  mutations: {
    SET_URL(state, data) {
      state.dnsData = data;

    }
  },
  actions: {
    async fetchIP({
      commit
    }, payload) {
      let res = await axios.post('https://dns-checker.herokuapp.com/siteIp', payload);
      // console.log(res.data);
      commit('SET_URL', res.data);
    }
  },

})