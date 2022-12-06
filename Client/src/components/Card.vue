<script>
export default {
  name: "Card",
  props: ["movie"],
  methods: {
    checkID(id) {
      console.log(id);
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <button @click.prevent="checkID(movie.id)">
      <div class="w-[19rem] transition hover:-translate-y-1 hover:scale-110">
        <img class="rounded" :src="movie.image" alt="" />
      </div>
    </button>
  </div>
</template>
