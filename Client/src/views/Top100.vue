<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    Card,
    Footer,
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
  <div class="container my-[3rem]">
    <div class="container w-[15rem] text-center">
      <p class="text-[35px]">Top 100</p>
    </div>
    <div class="grid grid-cols-4 gap-2 flex justify-between my-[3rem]">
      <Card v-for="item in movies" :key="item.id" :movie="item" />
    </div>
  </div>
  <Footer />
</template>
