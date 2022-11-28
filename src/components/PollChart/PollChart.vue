<template>
  <div class="card">
    <div class="card-body">
      <canvas id="poll-chart"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "PollChart",
  data() {
    return {
      xValues: ["Italy", "France", "Spain", "USA", "Argentina", "Syria"],
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
    };
  },
  async mounted() {
    const ctx = document.getElementById("poll-chart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.xValues,
        datasets: [
          {
            label: "Votes count",
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            data: this.yValues,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Simple poll chart bar 2022",
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style></style>
