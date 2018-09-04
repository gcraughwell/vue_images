<template>
  <div>
<AppHeader></AppHeader>
      <div class="ui contianer">
      <router-view></router-view>
      </div>
</div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>



<!-- State list
Getters get some detail of state
Mutations mutate the state add something
Actions mutiple mutations  -->
