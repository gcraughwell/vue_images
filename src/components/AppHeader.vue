<template>
  <div>
  <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Image Storage
      </a>

    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</div>
</template>


<script>
//mapactions is a function that will automatically connect different actions to a component instance.
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  //maps the action login to component
  methods: mapActions(['login'])

  // below allows you to use mutiple methods.
  // ...methods: mapActions(['login'])
};
</script>
<style>
</style>
