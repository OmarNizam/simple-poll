<template>
  <div class="card">
    <div class="card-body">
      <Bar
        test-data-id="bar-component"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { usePollStore } from "@/stores/PollStore";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "PollChart",
  components: {
    Bar,
  },
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  computed: {
    ...mapState(usePollStore, ["chartState", "chartXValues"]),
    // Compute chart data from store
    chartData() {
      return {
        labels: this.chartXValues,
        datasets: [
          {
            label: this.chartState.label,
            data: this.chartState.yValues,
            backgroundColor: this.chartState.backgroundColor,
            borderColor: this.chartState.borderColor,
            borderWidth: this.chartState.borderWidth,
          },
        ],
      };
    },
    // Compute chart options
    chartOptions() {
      return {
        responsive: true,
      };
    },
  },
};
</script>

<style></style>
