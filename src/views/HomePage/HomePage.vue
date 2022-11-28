<template>
  <main class="container">
    <!-- <div class="text-center"><h1>Home Page!</h1></div> -->
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <!-- Poll Form section -->
      <section>
        <PollForm />
      </section>
      <!-- Poll Vote section -->
      <section>
        <PollVote />
      </section>
      <!-- Poll Chart section -->
      <section>
        <PollChart />
      </section>
    </div>
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
