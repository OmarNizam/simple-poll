<template>
  <HomePage />
</template>

<script>
import HomePage from "./views/HomePage/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
@import "~@/../mdb/scss/index.free.scss";
#app {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
