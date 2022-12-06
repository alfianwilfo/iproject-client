<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Card",
  props: ["movie"],
  methods: {
    ...mapActions(useCounterStore, ["getDetail"]),
    checkID(id) {
      this.getDetail(id);
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <button @click.prevent="checkID(movie.id)">
      <div class="w-[19rem] transition hover:-translate-y-1 hover:scale-108">
        <img class="rounded" :src="movie.image" alt="" />
      </div>
    </button>
  </div>
</template>
