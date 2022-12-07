<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Register",
  data() {
    return {
      data: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["registerHandler"]),
    getData() {
      this.registerHandler(this.data);
    },
  },
};
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="shadow-xl flex justify-center items-end">
      <div class="">
        <img
          class="w-[447px]"
          src="https://joglojateng.com/wp-content/uploads/2020/04/Anak-kecil-corona.png"
          alt=""
        />
      </div>
      <div class="">
        <div>
          <p class="text-2xl text-center font-bold">Register</p>
          <p class="text-center font-bold">
            Untuk dapat melihat data covid diseluruh dunia
          </p>
        </div>
        <div class="w-[400px] h-[360px]">
          <form @submit.prevent="getData">
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                v-model="data.username"
                class="w-[280px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                v-model="data.email"
                class="w-[280px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Username"
              />
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                v-model="data.password"
                class="w-[280px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="password"
              />
            </div>
            <div>
              <button
                class="bg-[#006E7F] w-[79px] h-[30px] rounded mt-2 text-[15px] text-white"
              >
                Register
              </button>
            </div>
            <div>
              <p>
                Sudah punya akun?
                <router-link to="/login">
                  <button>Login</button>
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
