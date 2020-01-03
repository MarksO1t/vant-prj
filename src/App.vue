<template>
  <!-- <div id="app">
	<BeginIndex></BeginIndex>
  </div> -->
  <div id="app">
    <!-- <header>
      <router-link to="/helloWorld">helloWorld</router-link>
      <router-link to="/vueIndex">vueIndex</router-link>
    </header> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BeginIndex from './components/index.vue'

export default {
  name: 'app',
  // components: {
	// BeginIndex
  // }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
