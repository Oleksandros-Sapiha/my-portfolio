<template>
	<div id="app">
	<router-view></router-view>
    <NavDashboard/>
    <HomePage/>
    <WorkList/>
    <FooterComponent/>
	</div>
</template>

<script>
import NavDashboard from './pages/NavDashboard.vue'
import HomePage from './pages/HomePage.vue'
import WorkList from './components/WorkList.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
	components: {
    NavDashboard,
    HomePage,
    WorkList,
    FooterComponent
	}
};
</script>

<style>
  #app {
    font-family: system-ui;
    background-color: #0A1525;
  }
</style>
