<template>
  <div class="card">
    <div class="card-body">
      <p test-dat-id="hello-title">Poll-Form Component</p>
      <!-- <form> -->
      <!-- Question Input -->
      <div class="mb-3">
        <label for="question-input" class="form-label">Poll Question:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your question"
          aria-label="Question input"
          id="question-input"
          :maxlength="max"
          v-model="question"
          @input="handleQuestion"
          @change="handleQuestion"
          required
        />
        <span class="text-danger" v-if="msg.question">{{ msg.question }}</span>
      </div>
      <!-- Options Input -->
      <label for="answer-input" class="form-label mt-1 mb-0"
        >Poll Options:</label
      >
      <div v-for="(input, k) of inputs" :key="k">
        <div class="d-flex pt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your option"
            aria-label="Option input"
            id="question-input"
            :maxlength="max"
            v-model="input.option"
            @input="handleOption"
          />
          <button
            type="submit"
            class="btn ms-2"
            @click="addOption"
            v-show="k === inputs.length - 1"
          >
            <ion-icon
              id="add-icon"
              name="add-circle-outline"
              size="large"
            ></ion-icon>
          </button>
          <button
            class="btn"
            @click="removeOption(k)"
            v-show="k < inputs.length && k != 0 && k != 1"
          >
            <ion-icon name="trash-outline" size="large"></ion-icon>
          </button>
        </div>
        <span class="text-danger" v-if="msg.question">{{ msg.question }}</span>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { usePollStore } from "@/stores/PollStore";

export default {
  name: "PollForm",
  data() {
    return {
      max: 10,
      msg: [],
      question: "",
      inputs: [
        {
          option: "option1",
        },
        {
          option: "option2",
        },
      ],
    };
  },
  watch: {
    question(value) {
      this.question = value;
      this.validateInput(value);
    },
  },
  mounted() {
    this.handleOption();
  },
  methods: {
    ...mapActions(usePollStore, ["setQuestion", "setOptions"]),

    handleQuestion() {
      this.setQuestion(this.question);
    },

    addOption() {
      this.inputs.push({ option: "" });
      this.handleOption();
    },

    removeOption(index) {
      this.inputs.splice(index, 1);
      this.handleOption();
    },

    handleOption() {
      this.setOptions(this.inputs);
    },

    validateInput(value) {
      value.length >= 10
        ? (this.msg["question"] = "You reach the max limit 80!")
        : (this.msg["question"] = "");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ion-icon {
  height: 14px;
  width: 14px;
}
</style>
