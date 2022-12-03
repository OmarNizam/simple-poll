<template>
  <div class="card">
    <div class="card-body">
      <p test-dat-id="hello-title">Poll-Form Component</p>
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
          required
        />
        <span class="text-danger" v-if="msg.question">
          {{ msg.question }}
        </span>
      </div>
      <!-- Options Input -->
      <label for="answer-input" class="form-label mt-1 mb-0"
        >Poll Options:</label
      >
      <div v-for="(input, k) of options.slice(0, 10)" :key="k">
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
            required
          />
          <button
            class="btn ms-2"
            @click="addOption"
            v-show="k === options.length - 1"
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
            v-show="k < options.length && k != 0 && k != 1"
          >
            <ion-icon name="trash-outline" size="large"></ion-icon>
          </button>
        </div>
        <span class="text-danger" v-if="msg.option && k === optionIndex">
          {{ msg.option }}
        </span>
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn mt-2">
          <ion-icon
            id="reset-icon"
            name="refresh-circle-outline"
            size="large"
          ></ion-icon>
        </button>
      </div>
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
      max: 80,
      msg: [],
      optionIndex: 0,
      question: "",
      options: [
        {
          option: "option-1",
        },
        {
          option: "option-2",
        },
      ],
    };
  },
  watch: {
    question(value) {
      this.validateInput(value, "question");
    },
    options: {
      handler: function (val) {
        this.validateInput(val, "option");
      },
      deep: true,
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
      this.options.push({ option: "" });
      this.handleOption();
    },

    removeOption(index) {
      this.options.splice(index, 1);
      this.handleOption();
    },

    handleOption() {
      this.setOptions(this.options);
    },

    validateInput(value, inputType) {
      if (value.length >= this.max && inputType === "question") {
        this.msg[inputType] = "You reach the max limit 80!";
      } else if (inputType === "option") {
        for (const option of value) {
          if (Object.values(option)[0].length >= this.max) {
            const index = value.indexOf(option);
            this.optionIndex = index;
            this.msg[inputType] = `You reach the max limit 80! for option ${
              index + 1
            }`;
          } else {
            this.msg[inputType] = "";
          }
        }
      } else {
        this.msg[inputType] = "";
      }
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
