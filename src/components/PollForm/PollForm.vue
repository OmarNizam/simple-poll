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
          v-model="question"
          @input="handleQuestion"
          @change="handleQuestion"
        />
      </div>
      <!-- Options Input -->
      <label for="answer-input" class="form-label">Poll Options:</label>
      <div class="d-flex mb-3" v-for="(input, k) of inputs" :key="k">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your option"
          aria-label="Option input"
          id="question-input"
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
        <button class="btn" @click="removeOption(k)" v-show="k < inputs.length">
          <ion-icon name="trash-outline" size="large"></ion-icon>
        </button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { usePollStore } from "@/stores/PollStore";

// const pollStore = usePollStore();

export default {
  name: "PollForm",
  data() {
    return {
      question: "",
      inputs: [
        {
          option: "",
        },
      ],
    };
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
      // const newArr = this.inputs.map((item) => {
      //   return item.option;
      // });
      this.setOptions(Object.values(this.inputs));
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
