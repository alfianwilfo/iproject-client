<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import { mapStores, mapActions, mapState } from "pinia";
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
  computed: {
    ...mapState(useCounterStore, ["movies"]),
  },
};
</script>

<template>
  <NavBar />
  <!-- <Card v-for="item in movies" /> -->
</template>
