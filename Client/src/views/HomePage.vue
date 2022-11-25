<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "HomePage",
  components: {
    NavBar,
    Card,
  },
  methods: {
    ...mapActions(useCounterStore, ["getMovie"]),
  },
  created() {
    this.getMovie();
  },
};
</script>

<template>
  <NavBar />
  <Card />
</template>
