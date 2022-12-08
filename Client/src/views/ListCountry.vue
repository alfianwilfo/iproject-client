<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Search from "../components/Search.vue";
export default {
  name: "ListCountry",
  components: {
    NavBar,
    Footer,
    Card,
    Search,
  },
  methods: {
    ...mapActions(useCounterStore, ["getCountries"]),
  },
  computed: { ...mapState(useCounterStore, ["countries"]) },
  created() {
    this.getCountries();
  },
};
</script>

<template>
  <NavBar />
  <div class="w-[340px]">
    <Search />
  </div>
  <div class="container my-[3rem] grid grid-cols-7 gap-3">
    <Card v-for="country in countries" :country="country" :key="country" />
  </div>
  <Footer />
</template>
