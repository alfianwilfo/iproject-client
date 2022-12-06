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
              Update Your Information About Covid-19 Today
            </p>
          </div>
          <div>
            <router-link to="/top100">
              <button
                class="text-[29px] bg-[#006E7F] rounded-lg text-white w-[300px] h-[46px] hover:brightness-150"
              >
                Check now
              </button>
            </router-link>
          </div>
        </div>
        <div class="">
          <img
            class="w-[15rem]"
            src="../assets/—Pngtree—red covid-19 bacteria isolated on_5340587.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
