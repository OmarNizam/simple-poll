<template>
  <div class="card">
    <div class="card-body">
      <!-- Question Input -->
      <div class="mb-3">
        <label
          test-data-id="question-input-label"
          for="question-input"
          class="form-label"
          >Poll Question:</label
        >
        <input
          type="text"
          class="form-control"
          placeholder="Enter your question"
          aria-label="Question input"
          test-data-id="question-input"
          id="question-input"
          :maxlength="max"
          v-model="question"
          @input="handleQuestion"
          required
        />
        <span
          test-data-id="question-input-validation"
          class="text-danger"
          v-if="msg.question"
        >
          {{ msg.question }}
        </span>
      </div>
      <!-- Options Input -->
      <label for="answer-input" class="form-label">Poll Options:</label>
      <div v-for="(input, k) of options.slice(0, 10)" :key="k">
        <div test-data-id="options-input" class="d-flex pb-3">
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
            :test-data-id="`add-button-option-${k}`"
            class="btn ms-2 bg-success"
            @click="addOption"
            :disabled="chartXValues.length > 9"
            v-show="k === options.length - 1"
          >
            <ion-icon
              id="add-icon"
              name="add-circle-outline"
              size="large"
              color="light"
            ></ion-icon>
          </button>
          <button
            :test-data-id="`delete-button-option-${k}`"
            class="btn bg-danger"
            @click="removeOption(k)"
            v-show="k < options.length && k != 0 && k != 1"
          >
            <ion-icon
              name="trash-outline"
              size="large"
              color="light"
            ></ion-icon>
          </button>
        </div>
        <span
          :test-data-id="`option-input-validation-${k}`"
          class="text-danger"
          v-if="msg.option && k === optionIndex"
        >
          {{ msg.option }}
        </span>
      </div>
      <div class="d-flex justify-content-between">
        <button test-data-id="reset-button" class="btn bg-info" @click="reset">
          <ion-icon
            id="reset-icon"
            name="refresh-circle-outline"
            size="large"
            color="light"
          ></ion-icon>
        </button>
        <p class="mb-0 mt-2 me-3">{{ chartXValuesLength }}/10</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePollStore } from "@/stores/PollStore";

export default {
  name: "PollForm",
  data() {
    return {
      max: 80,
      msg: [],
      optionIndex: null,
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
  computed: {
    ...mapState(usePollStore, ["chartXValues", "chartXValuesLength"]),
  },
  methods: {
    ...mapActions(usePollStore, ["setQuestion", "setOptions", "resetYValues"]),

    handleQuestion() {
      this.setQuestion(this.question);
    },

    addOption() {
      if (this.chartXValues.length <= 10) this.options.push({ option: "" });
      this.handleOption();
    },

    removeOption(index) {
      this.options.splice(index, 1);
      this.handleOption();
    },

    handleOption() {
      this.setOptions(this.options);
    },

    reset() {
      this.options = [
        {
          option: "option-1",
        },
        {
          option: "option-2",
        },
      ];
      this.handleOption();
      this.resetYValues();
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
