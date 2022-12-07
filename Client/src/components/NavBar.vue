<script type="text/javascript">
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(useCounterStore, ["logoutHandler", "paymentHandler"]),
    forLogout() {
      this.logoutHandler();
    },
    payPremium() {
      this.paymentHandler();
    },
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
};
</script>

<template>
  <div class="container flex flex-row justify-between h-20 bg-[#006E7F]">
    <div class="flex justify-center items-center w-[9rem]">
      <button class="text-[2rem] font-bold text-[#FFFAE7]">Covid-19</button>
    </div>

    <div class="flex items-center justify-center w-[10rem]">
      <button @click.prevent="payPremium">Pay!</button>
      <button
        v-if="isLogin"
        @click="forLogout"
        class="w-[5rem] h-[3rem] hover:bg-[#D6E4E5] hover:text-black rounded text-[#EFF5F5]"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fffae7;
}
</style>
