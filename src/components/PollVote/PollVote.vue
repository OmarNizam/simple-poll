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
          :id="`optionRadio-${k}`"
          class="form-check-input"
          type="radio"
          name="optionRadio"
          :value="`${k}`"
          v-model="choiceIndex"
        />
        <label class="form-check-label" :for="`optionRadio-${k}`">
          {{ input }}
        </label>
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn mt-2" @click="vote(choiceIndex)">Vote</button>
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
