<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>This is the app file</h1>
    <router-link :to="'/wall'"><button type="text">to the WALL?</button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './router'

  export default {
    name: 'app',
    mounted: function () {
    this.$root.$data.store.actions.initAuth()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>