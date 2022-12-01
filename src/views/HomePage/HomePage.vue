<template>
  <main class="container my-5" style="height: 100vh">
    <div class="row text-center">
      <div><h1>Create Simple Poll!</h1></div>
    </div>
    <!-- Desktop -->
    <div
      class="d-md-flex justify-content-center align-items-center w-auto"
      style="height: 100vh"
    >
      <!-- Poll Form section -->
      <section class="col-md-4 p-1 p-md-0">
        <PollForm />
      </section>
      <!-- Poll Vote section -->
      <section class="col-md-4 p-1 p-md-0">
        <PollVote />
      </section>
      <!-- Poll Chart section -->
      <section class="col-md-4 p-1 p-md-0 text-center">
        <PollChart ref="bar" />
      </section>
    </div>
    <!-- Mobile -->
  </main>
</template>

<script>
import PollForm from "@/components/PollForm/PollForm.vue";
import PollVote from "@/components/PollVote/PollVote.vue";
import PollChart from "@/components/PollChart/PollChart.vue";

export default {
  name: "HomePage",
  components: {
    PollForm,
    PollVote,
    PollChart,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
