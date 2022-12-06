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
  <div class="container">
    <div class="container"><p class="text-[35px]">Top 100</p></div>
    <div class="container"><button>Genre</button></div>
    <div class="grid grid-cols-4 gap-2 mt-2 flex justify-between">
      <Card v-for="item in movies" :key="item.id" :movie="item" />
    </div>
  </div>
</template>
