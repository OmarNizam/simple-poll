<template>
  <main>
    <div class="container">
      <div class="row text-center">
        <div>
          <h1 test-data-id="title" class="text-light py-4">
            Create Simple Poll!
          </h1>
        </div>
      </div>
      <!-- Desktop -->
      <div class="d-lg-flex w-auto" style="height: 100vh">
        <!-- Poll Form section -->
        <section class="col-lg-4 p-lg-0 text-start">
          <PollForm />
        </section>
        <!-- Poll Vote section -->
        <section class="col-lg-4 px-lg-2 pt-lg-0 py-2 text-start">
          <PollVote />
        </section>
        <!-- Poll Chart section -->
        <section class="col-lg-4 p-lg-0 text-center">
          <PollChart />
        </section>
      </div>
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
<style scoped lang="scss">
main {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  /* The image used */
  background-image: url("../../assets/images/main.jpeg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

@media (max-width: 960px) {
  main {
    background-image: none;
  }
}
</style>
