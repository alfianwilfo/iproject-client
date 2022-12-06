import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => {
    movies: [];
  },
  actions: {
    getMovie() {
      axios({
        url: "https://imdb-top-100-movies.p.rapidapi.com/premiummovies",
        headers: {
          "X-RapidAPI-Key":
            "206048b294msh3f43529c347895ep13c30ajsn0d9f344e0ca0",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
        method: "GET",
      })
        .then((obj) => {
          let { data } = obj;
          this.movies = data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((ee) => {
          console.log(ee, "????");
        });
    },
  },
});
