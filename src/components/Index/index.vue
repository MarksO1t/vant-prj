<template>
	<div>
		<p>123</p>
		<img alt="Vue logo" src="../../assets/logo.png" @click="start">
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		name: 'vueIndex',
		data() {
			return {
				msg: 'Click To See !'
			}
		},
		methods: {
			start() {
				this.$router.push("/index");
				window.console.log("test");
			}
		}
	}
</script>

<style>
</style>
