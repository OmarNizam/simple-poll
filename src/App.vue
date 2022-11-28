<template>
  <!-- <HelloWorld
    msg="Thank you for using our product. We're glad you're with us."
  /> -->
  <HomePage />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./views/HomePage/HomePage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
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
