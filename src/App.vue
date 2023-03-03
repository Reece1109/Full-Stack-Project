<template>
  <div>
    <NavBarVue></NavBarVue>
    <router-view></router-view>
    <FootercVue></FootercVue>
  </div>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
import FootercVue from './components/FooterC.vue';

export default {
  components: {
    NavBarVue,
    FootercVue
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: pointer !important;
  /* font */
  font-family: 'EB Garamond', serif;
  font-weight: 500;
}
</style>
