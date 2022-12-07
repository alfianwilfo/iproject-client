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
    firstHistory: {},
    secondHistory: {},
    thirdHistory: {},
    isPre: false,
    isVip: false,
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

    registerHandler(obj) {
      let { email, username, password } = obj;
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
          localStorage.status = data.status;
          if (data.status === "Basic") {
            this.isVip = false;
          } else {
            this.isVip = true;
          }
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
      let changeStatus = () => {
        axios({
          url: this.url + "/payments",
          method: "PATCH",
          headers: { access_token: localStorage.access_token },
        })
          .then((msg) => {
            let { data } = msg;
            Swal.fire("Congrats", data.message, "success");
            this.isVip = true;
            localStorage.status = "Premium";
          })
          .catch((err) => {
            console.log(err);
          });
      };

      axios({
        url: this.url + "/payments",
        method: "GET",
        headers: { access_token: localStorage.access_token },
      })
        .then((msg) => {
          let { data } = msg;
          snap
            .pay(data.data.token, {
              onSuccess: function (result) {
                return changeStatus();
              },
            })
            .then((msg) => {});
        })
        .catch((err) => {
          Swal.fire("Error", err.response.data.message, "error");
        });
    },
    getHistory(name) {
      this.isPre = true;
      axios({
        url: this.url + "/corona/history",
        method: "GET",
        params: { country: name },
      })
        .then((msg) => {
          let { data } = msg;
          this.firstHistory = data.response[0];
          this.secondHistory = data.response[1];
          this.thirdHistory = data.response[2];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    checkLogin() {
      if (!localStorage.access_token) {
        this.isLogin = false;
      } else {
        if (localStorage.status === "Basic") {
          this.isVip = false;
        } else {
          this.isVip = true;
        }
        this.isLogin = true;
      }
    },
  },
});
