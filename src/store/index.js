import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
//allows Vuex to talk to Vue still need to add the store to main.js
Vue.use(Vuex);

// auth wires up our auth module with our vuex instance
export default new Vuex.Store({
  modules: {
    auth
  }
});
