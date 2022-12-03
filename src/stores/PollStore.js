import { defineStore } from "pinia";

export const usePollStore = defineStore("PollStore", {
  state: () => ({
    question: "",
    answers: [],
    chartState: {
      xValues: [],
      yValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      label: "Votes count",
      backgroundColor: [
        "rgba(255, 241, 0, 0.2)",
        "rgba(255, 140, 0, 0.2)",
        "rgba(232, 17, 35, 0.2)",
        "rgba(236, 0, 140, 0.2)",
        "rgba(104, 33, 122, 0.2)",
        "rgba(0, 24, 143, 0.2)",
        "rgba(0, 188, 242, 0.2)",
        "rgba(0, 178, 148, 0.2)",
        "rgba(0, 158, 73, 0.2)",
        "rgba(186, 216, 10, 0.2)",
      ],
      borderColor: [
        "rgb(255, 241, 0)",
        "rgb(255, 140, 0)",
        "rgb(232, 17, 35)",
        "rgb(236, 0, 140)",
        "rgb(104, 33, 122)",
        "rgb(0, 24, 143)",
        "rgb(0, 188, 242)",
        "rgb(0, 178, 148)",
        "rgb(0, 158, 73)",
        "rgb(186, 216, 10)",
      ],
      borderWidth: 1,
    },
  }),
  getters: {
    chartXValues(state) {
      return state.chartState.xValues.map((x) => Object.values(x)[0]);
    },
    chartXValuesLength() {
      return this.chartXValues.length;
    },
  },
  actions: {
    setQuestion(newQuestion) {
      this.question = newQuestion;
    },

    setOptions(newOptionsArr) {
      this.chartState.xValues = newOptionsArr;
    },

    vote(choiceIndex) {
      this.chartState.yValues[choiceIndex]++;
    },

    resetYValues() {
      this.chartState.yValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
  },
});
