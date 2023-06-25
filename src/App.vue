<template>
  <home-page msg="Welcome to Your Vue.js App" />
</template>

<script>
import HomePage from './views/HomePage/HomePage.vue';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
