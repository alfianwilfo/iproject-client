<script type="text/javascript">
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(useCounterStore, [
      "logoutHandler",
      "paymentHandler",
      "checkLogin",
    ]),
    forLogout() {
      this.logoutHandler();
    },
    payPremium() {
      this.paymentHandler();
    },
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin", "isVip"]),
  },
  created() {
    this.checkLogin();
  },
};
</script>

<template>
  <div class="container flex flex-row justify-between h-20 bg-[#006E7F]">
    <div class="flex justify-center items-center w-[9rem]">
      <router-link class="text-[2rem] font-bold text-[#FFFAE7]" to="/list"
        >Covid-19</router-link
      >
    </div>

    <div class="flex items-center justify-center w-[10rem]">
      <button v-if="!isVip && isLogin" @click.prevent="payPremium">Pay!</button>
      <router-link
        v-if="!isLogin"
        to="/login"
        class="text-center w-[5rem] h-[3rem] hover:bg-[#D6E4E5] hover:text-black rounded text-[#EFF5F5]"
        >Login</router-link
      >
      <router-link
        v-if="!isLogin"
        to="/register"
        class="text-center w-[5rem] h-[3rem] hover:bg-[#D6E4E5] hover:text-black rounded text-[#EFF5F5]"
        >Register</router-link
      >
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
