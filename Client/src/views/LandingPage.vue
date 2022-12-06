<script>
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavBar from "../components/NavBar.vue";
export default {
  name: "LandingPage",
  components: {
    NavBar,
    Footer,
  },
  created() {
    this.getMovie();
  },
  methods: {
    ...mapActions(useCounterStore, ["getMovie"]),
  },
  computed: {
    ...mapState(useCounterStore, ["random"]),
  },
};
</script>

<template>
  <div class="h-screen flex flex-col">
    <div>
      <NavBar />
    </div>
    <div>
      <div class="flex justify-center items-center h-[38rem]">
        <div class="text-center w-[43rem]">
          <div>
            <p class="text-[42px] font-bold">
              100 Best Movies of All Time That You Should Watch Immediately
            </p>
          </div>
          <div>
            <router-link to="/top100">
              <button
                class="text-[29px] bg-[#497174] rounded-lg text-white w-[400px] h-[46px] hover:brightness-150"
              >
                Check them now
              </button>
            </router-link>
          </div>
        </div>
        <div class="w-[230px]">
          <img :src="random.image" alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
