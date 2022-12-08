<script>
export default {
  name: "preloader",
};
</script>

<template>
  <div id="preloader">
    <div class="loading">
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_66hoasot.json"
        background="transparent"
        speed="2"
        style="width: 500px; height: 500px"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<style>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
  opacity: 0.85;
}

#preloader .loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
