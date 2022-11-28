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
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
