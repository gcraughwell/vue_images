import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store/index";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  //use browser route mode and remove the # from th route
  mode: "history",
  //vue router, lets you define the path as well as the component
  routes: [
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler }
  ]
});

//import the store from Vuex to our view instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
