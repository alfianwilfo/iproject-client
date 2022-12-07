<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Card",
  props: ["country"],
  methods: {
    ...mapActions(useCounterStore, ["getStatisticCountry"]),
    getName(name) {
      this.getStatisticCountry(name);
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <button
      @click.prevent="getName(country)"
      class="hover:bg-[#006E7F] w-[178px] h-[45px] rounded hover:text-white"
    >
      <p>{{ country }}</p>
    </button>
  </div>
</template>
