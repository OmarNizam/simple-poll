<template>
  <main class="container home-container">
    <h1>Home Page!</h1>
    <!-- Poll Form section -->
    <section>
      <PollForm />
    </section>
  </main>
</template>

<script>
import PollForm from "@/components/PollForm/PollForm.vue";

export default {
  name: "HomePage",
  components: {
    PollForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
