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
      console.log(state.dnsData);
    }
  },
  actions: {
    async fetchIP({
      commit
    }, payload) {
      let res = await axios.post('http://localhost:3000/siteIp', payload);
      // console.log(res.data);
      commit('SET_URL', res.data);
    }
  },

})