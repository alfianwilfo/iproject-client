import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    // url: "https://pilm-zzz.up.railway.app";
    url: "http://localhost:3000",
    movies: [],
  }),
  actions: {
    getMovie() {
      axios({
        url: this.url + "/movies",
        method: "GET",
      })
        .then((msg) => {
          let { data } = msg;
          this.movies = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
