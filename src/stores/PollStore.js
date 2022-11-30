import { defineStore } from "pinia";

export const usePollStore = defineStore("PollStore", {
  state: () => ({
    question: "",
    answers: [],
    chartState: {
      // xValues: ["Italy", "France", "Spain", "USA", "Argentina", "Syria"],
      xValues: [""],
      yValues: [44, 25, 32, 19, 29, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  }),
  getters: {
    chartXValues(state) {
      return state.chartState.xValues.map((x) => Object.values(x)[0]);
    },
  },
  actions: {
    setQuestion(newQuestion) {
      this.question = newQuestion;
    },
    setOptions(newOptionsArr) {
      this.chartState.xValues = newOptionsArr;
    },
  },
});
