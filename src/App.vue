<template>
  <div id="app">
    <NavDashboard />
    <router-view />
    <WorkList />
    <FooterComponent />
  </div>
</template>

<script>
import NavDashboard from './pages/NavDashboard.vue'
import WorkList from './components/WorkList.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: { NavDashboard, WorkList, FooterComponent }
}
</script>


<style>
  #app {
    font-family: system-ui;
    background-color: #0A1525;
    min-height: 100vh; 
    margin: 0;
  }
  html, body {
  margin: 0;                
  background-color: #0A1525; 
  }
</style>
