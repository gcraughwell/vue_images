import api from '../../api/imgur';

const state = {
  token: null
};

// !! turns a value into a boolean
//state is not th above state but a argument
const getters = {
  isLoggedIn: state => !!state.token
};

//commit allows you to call mutations
const actions = {
  //action creator to call api from imgur.js to start the auth flow.
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

//refers ro state token above
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
