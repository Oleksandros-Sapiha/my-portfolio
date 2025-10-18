<template>
	<div id="app">
	<router-view></router-view>
		<HomePage/>
	</div>
</template>

	<script>
import HomePage from './pages/HomePage';

export default {
	components: {
		HomePage,
	}
};
	</script>
