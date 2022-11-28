<template>
  <div class="card">
    <div class="card-body">
      <canvas id="poll-chart"></canvas>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useApplicationStore } from "@/stores/ApplicationStore";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "PollChart",
  computed: {
    ...mapState(useApplicationStore, ["chartState"]),
  },
  async mounted() {
    this.createChart();
  },
  methods: {
    /**
     * createChart method create new Chart getting data from chartState
     */
    createChart() {
      const ctx = document.getElementById("poll-chart");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.chartState.xValues,
          datasets: [
            {
              label: "Votes count",
              backgroundColor: this.chartState.backgroundColor,
              borderColor: this.chartState.borderColor,
              borderWidth: this.chartState.borderWidth,
              data: this.chartState.yValues,
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
  },
};
</script>

<style></style>
