import Vue from 'vue';
import App from './App';
import store from './store/index';

//import the store from Vuex to our view instance
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
