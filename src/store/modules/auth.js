import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_token")
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
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    //setd the token from query.access_token as imgur token so any user signing in for the first
    //time the token will be stored on localStorage and if there wont ask them to log in.
    window.localStorage.setItem("imgur_token", query.access_token);
    router.push("/"); //pushes the app to the / after auth process
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
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
