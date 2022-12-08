<script>
import { mapState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import Preloader from "./components/Preloader.vue";
import { useCounterStore } from "./stores/counter";
export default {
  name: "App",
  created() {},
  components: {
    Preloader,
  },
  computed: {
    ...mapState(useCounterStore, ["isPre"]),
  },
};
</script>

<template>
  <!-- <Preloader v-if="isPre" /> -->
  <RouterView />
</template>
