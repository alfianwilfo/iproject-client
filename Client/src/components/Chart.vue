<script>
import { useCounterStore } from "../stores/counter";
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { mapActions, mapState } from "pinia";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "chart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Case Active",
            backgroundColor: "#006E7F",
            data: [],
          },
          {
            label: "Total Death",
            backgroundColor: "#009EFF",
            data: [],
          },
        ],
      },
      chartOptions: {},
    };
  },
  created() {
    this.getHistory(this.$route.params.name);
    this.chartData.labels.push(
      new Date(this.firstHistory.time).toString().substring(0, 24)
    );
    this.chartData.datasets[0].data.push(this.firstHistory?.cases?.active);
    this.chartData.datasets[1].data.push(this.firstHistory?.deaths?.total);

    this.chartData.labels.push(
      new Date(this.secondHistory.time).toString().substring(0, 24)
    );
    this.chartData.datasets[0].data.push(this.secondHistory?.cases?.active);
    this.chartData.datasets[1].data.push(this.secondHistory?.deaths?.total);

    this.chartData.labels.push(
      new Date(this.thirdHistory.time).toString().substring(0, 24)
    );
    this.chartData.datasets[0].data.push(this.thirdHistory?.cases?.active);
    this.chartData.datasets[1].data.push(this.thirdHistory?.deaths?.total);
  },
  methods: {
    ...mapActions(useCounterStore, ["getHistory"]),
  },
  computed: {
    ...mapState(useCounterStore, [
      "firstHistory",
      "secondHistory",
      "thirdHistory",
    ]),
  },
};
</script>

<template>
  <Bar :data="chartData" />
</template>
