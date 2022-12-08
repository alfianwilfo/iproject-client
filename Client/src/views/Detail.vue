<script>
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import { useCounterStore } from "../stores/counter";
import Chart from "../components/Chart.vue";
export default {
  name: "detail",
  components: { NavBar, Chart },
  computed: {
    ...mapState(useCounterStore, ["statistic", "isLogin"]),
    calculate() {
      return this.statistic.deaths.new === null
        ? 0
        : "+" + Number(this.statistic.deaths.new).toLocaleString();
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["getStatisticCountry"]),
  },
  created() {
    this.getStatisticCountry(this.$route.params.name);
  },
};
</script>

<template>
  <NavBar />
  <div class="flex justify-center items-center flex-col">
    <div>
      <p class="font-bold text-3xl antialiased">{{ statistic.country }}</p>
    </div>
    <div>
      <p class="font-bold">{{ statistic.continent }}</p>
    </div>
    <div>
      <p>
        Total Population: {{ Number(statistic.population).toLocaleString() }}
      </p>
    </div>
    <div class="flex justify-center gap-4">
      <div>
        <div><p>Cases</p></div>
        <div>
          <p>New : {{ Number(statistic.cases.new).toLocaleString() }}</p>
          <p>Active : {{ Number(statistic.cases.active).toLocaleString() }}</p>
          <p>
            Critical :
            {{ Number(statistic.cases.critical).toLocaleString() }}
          </p>
          <p>
            Recovered :
            {{ Number(statistic.cases.recovered).toLocaleString() }}
          </p>
          <p>Total : {{ Number(statistic.cases.total).toLocaleString() }}</p>
        </div>
      </div>
      <div>
        <div>
          <p>Deaths</p>
        </div>
        <div>
          <p>New: {{ calculate }}</p>
          <p>Total: {{ Number(statistic.deaths.total).toLocaleString() }}</p>
          <p></p>
        </div>
      </div>
      <div>
        <div><p>Tests</p></div>
        <div>
          <p>Total : {{ Number(statistic.tests.total).toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-screen flex justify-center items-baseline">
    <div class="w-[550px]" v-if="isLogin">
      <Chart />
    </div>
  </div>
</template>
