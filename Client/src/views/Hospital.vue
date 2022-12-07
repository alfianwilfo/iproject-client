<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "hospital",
  methods: {
    ...mapActions(useCounterStore, ["getHospital"]),
  },
  created() {
    this.getHospital();
  },
};
</script>

<template></template>
