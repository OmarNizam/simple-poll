<template>
  <div class="card">
    <div class="card-body">
      <h4>Question:</h4>
      <h5>{{ this.question }}</h5>

      <div
        class="d-flex form-check justify-content-start align-items-center"
        v-for="(input, k) of chartXValues"
        :key="k"
      >
        <input
          class="form-check-input"
          type="radio"
          name="optionRadio"
          id="optionRadio"
        />
        <label class="form-check-label" for="optionRadio">
          {{ input }}
        </label>
      </div>
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
