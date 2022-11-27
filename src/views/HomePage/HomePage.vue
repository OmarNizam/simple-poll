<template>
  <div class="container home-container">
    <h1>Home Page!</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld/HelloWorld.vue";

export default {
  name: "HomePage",
  components: {
    HelloWorld,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
