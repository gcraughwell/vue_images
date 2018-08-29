<template>
  <div>
  <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Image Storage
      </a>

    <div class="right menu">
      <div v-if="isLoggedIn">
Log Out
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
  methods: mapActions(["login"])

  // below allows you to use mutiple methods.
  // ...methods: mapActions(['login'])
};
</script>
<style>
</style>
