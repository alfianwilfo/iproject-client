<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="container mx-auto">
    <div
      class="flex flex-row justify-between h-20 mt-[4px] rounded bg-[#497174]"
    >
      <div class="flex justify-center items-center w-[9rem]">
        <button class="text-[2rem] text-[#EFF5F5]">Filmzz</button>
      </div>
      <div class="flex flex-row justify-between w-50 items-center">
        <div>
          <button
            class="w-[5rem] h-[3rem] hover:bg-[#D6E4E5] hover:text-black rounded text-[#EFF5F5]"
          >
            Home
          </button>
        </div>
        <div>
          <button
            class="w-[6rem] h-[3rem] hover:bg-[#D6E4E5] hover:text-black rounded text-[#EFF5F5]"
          >
            My Favorite
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center w-[10rem]">
        <button
          class="w-[5rem] h-[3rem] hover:bg-[#D6E4E5] hover:text-black rounded text-[#EFF5F5]"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #eff5f5;
}
</style>
