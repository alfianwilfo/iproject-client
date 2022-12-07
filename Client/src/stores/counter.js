import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    // url: "https://pilm-zzz.up.railway.app",
    url: "http://localhost:3000",
    countries: [],
    statistic: {},
  }),
  actions: {
    getCountries() {
      axios({ url: this.url + "/corona/countries", method: "GET" })
        .then((msg) => {
          let { data } = msg;
          this.countries = data.response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getStatisticCountry(name) {
      axios({
        url: this.url + "/corona/statistics",
        method: "GET",
        params: { name: name },
      })
        .then((msg) => {
          let { data } = msg;
          this.statistic = data.response[0];
          this.router.push({
            name: "detail",
            params: { name: name },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHospital() {
      axios({
        url: "https://dekontaminasi.com/api/id/covid19/hospitals",
        method: "GET",
      })
        .then((msg) => {
          // let { data } = msg;
          console.log(msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
