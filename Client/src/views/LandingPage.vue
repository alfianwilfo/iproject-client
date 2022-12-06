<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavBar from "../components/NavBar.vue";
export default {
  name: "LandingPage",
  components: {
    NavBar,
  },
  created() {
    this.getMovie();
  },
  methods: {
    ...mapActions(useCounterStore, ["getMovie"]),
  },
};
</script>

<template><NavBar /></template>
