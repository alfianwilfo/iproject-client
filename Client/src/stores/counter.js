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
          Swal.fire("Error", err.response.data.message, "error");
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
          Swal.fire("Error", err.response.data.message, "error");
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
          Swal.fire("Error", err.response.data.message, "error");
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
          Swal.fire("Error", err.response.data.message, "error");
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
          Swal.fire("Error", err.response.data.message, "error");
        });
    },
    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
    },
    paymentHandler() {
      axios({ url: this.url + "/payments", method: "GET" })
        .then((msg) => {
          let { data } = msg;
          console.log(data.data.token);
          snap.pay(data.data.token, {
            onSuccess: function (result) {
              console.log("success");
              console.log(result);
            },
            onPending: function (result) {
              console.log("pending");
              console.log(result);
            },
            onError: function (result) {
              console.log("error");
              console.log(result);
            },
            onClose: function () {
              console.log(
                "customer closed the popup without finishing the payment"
              );
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
