<template>
  <div class="card">
    <div class="card-body">
      <h5>Question:</h5>
      <p test-data-id="question-text">{{ this.question }}</p>

      <div
        class="d-flex form-check justify-content-start align-items-center"
        v-for="(input, k) of chartXValues"
        :key="k"
      >
        <input
          :test-data-id="`option-radio-${k}`"
          :id="`optionRadio-${k}`"
          class="form-check-input"
          type="radio"
          name="optionRadio"
          :value="`${k}`"
          v-model="choiceIndex"
        />
        <label
          :test-data-id="`option-label-${k}`"
          class="form-check-label"
          :for="`optionRadio-${k}`"
        >
          {{ input }}
        </label>
      </div>
      <div class="d-flex justify-content-end">
        <button
          test-data-id="vote-button"
          class="btn mt-2 bg-success text-light"
          @click="vote(choiceIndex)"
        >
          Vote
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePollStore } from "@/stores/PollStore";

export default {
  name: "PollVote",
  data() {
    return {
      choiceIndex: "",
    };
  },
  computed: {
    ...mapState(usePollStore, ["question", "chartXValues"]),
  },
  methods: {
    ...mapActions(usePollStore, ["vote"]),
  },
};
</script>

<style></style>
