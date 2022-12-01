<template>
  <div class="card">
    <div class="card-body">
      <h1>{{ this.question }}</h1>

      <h1>
        {{ chartXValues }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { usePollStore } from "@/stores/PollStore";

export default {
  name: "PollVote",
  computed: {
    ...mapState(usePollStore, ["question", "chartXValues"]),
  },
};
</script>

<style></style>
