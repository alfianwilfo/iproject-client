import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    // url: "https://pilm-zzz.up.railway.app",
    url: "http://localhost:3000",
    movies: [],
    random: {},
    selected: {},
  }),
  actions: {
    getMovie() {
      axios({
        url: this.url + "/movies",
        method: "GET",
      })
        .then((msg) => {
          let { data } = msg;
          let random = "top" + Math.floor(Math.random() * 10) + 1;
          data.forEach((el) => {
            if (el.id === random) {
              this.random = el;
            }
          });
          this.movies = data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    },
    getDetail(id) {
      axios({
        url: this.url + "/movies/" + id,
        method: "GET",
      })
        .then((msg) => {
          console.log(msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
