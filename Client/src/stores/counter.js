import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    // url: "https://pilm-zzz.up.railway.app",
    url: "http://localhost:3000",
    countries: [],
    statistic: {},
    isLogin: false,
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
    registerHandler(obj) {
      let { email, username, password } = obj;
      console.log(email, username, password);
      axios({
        url: this.url + "/users/register",
        method: "POST",
        data: { email: email, username: username, password: password },
      })
        .then((msg) => {
          let { data } = msg;
          this.router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginHandler(obj) {
      let { email, password } = obj;
      axios({
        url: this.url + "/users/login",
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      })
        .then((msg) => {
          let { data } = msg;
          this.isLogin = true;
          localStorage.access_token = data.access_token;
          this.router.push({ name: "landing-page" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
    },
  },
});
