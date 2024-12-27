<template>
  <Header />
  <RouterView />
  
</template>

<script>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'Courses-Hub',
  components: {
    Header,
    RouterView,
  }
}
</script>

<style>
#app {
  margin: 0 !important;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
