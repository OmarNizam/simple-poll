<template>
  <div>
    <canvas id="pollChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "PollChart",
  data() {
    return {
      xValues: ["Italy", "France", "Spain", "USA", "Argentina"],
      yValues: [55, 49, 44, 24, 15],
      barColors: ["red", "green", "blue", "orange", "brown"],
    };
  },
  async mounted() {
    const ctx = document.getElementById("pollChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.xValues,
        datasets: [
          {
            label: "Votes count",
            backgroundColor: this.barColors,
            data: this.yValues,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "World Wine Production 2018",
        },
      },
    });
  },
};
</script>

<style></style>
