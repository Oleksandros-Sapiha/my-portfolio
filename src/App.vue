<template>
  <Homepage msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Homepage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
  #app {
    font-family: system-ui, Roboto, sans-serif;
  }
</style>
