<template>
	<div id="app">
	<router-view></router-view>
    <NavDashboard/>
    <HomePage/>
    <FooterComponent/>
	</div>
</template>

<script>
import NavDashboard from './pages/NavDashboard.vue'
import HomePage from './pages/HomePage.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
	components: {
    NavDashboard,
    HomePage,
    FooterComponent
	}
};
</script>

<style>
  #app {
    font-family: system-ui;
  }
</style>
