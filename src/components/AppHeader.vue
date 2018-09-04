<template>
  <div>
  <div class="ui secondary pointing menu">
      <router-link to="/" class="active item">
        Image Storage
      </router-link>

    <div class="right menu">
       <!-- v-if if logged in show or so v=else -->
      <div v-if="isLoggedIn" class="horizontial">
<router-link to="/" class="item ">Galleries</router-link>
<router-link to="/upload" class="item">Upload</router-link>
<a class="item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</div>
</template>


<script>
//mapactions is a function that will automatically connect different actions to a component instance.
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  //maps the action login to component
  //methods is for actions
  methods: mapActions(["login", "logout"])

  // below allows you to use mutiple methods.
  // ...methods: mapActions(['login'])
};
</script>

<style scoped>
.horizontial {
  display: flex;
  flex-direction: row;
}
</style>
