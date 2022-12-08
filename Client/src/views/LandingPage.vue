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
    this.getCountries();
  },
  methods: {
    ...mapActions(useCounterStore, ["getCountries"]),
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
              Update Infomasimu Tentang Covid-19 Hari Ini
            </p>
          </div>
          <div class="flex flex-row justify-center gap-4">
            <div>
              <router-link to="/list">
                <button
                  class="text-[20px] bg-[#006E7F] rounded-lg text-white w-[300px] h-[46px] hover:brightness-150"
                >
                  Daftar Negara
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="">
          <img
            class="w-[15rem]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1020px-SARS-CoV-2_without_background.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
