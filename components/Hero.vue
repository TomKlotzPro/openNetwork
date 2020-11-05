<template>
  <!-- hero -->
  <!-- hero wrapper -->
  <div class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <!-- hero text -->
    <div class="hero-text col-span-6">
      <h1
        class=" font-poppins text-4xl md:text-5xl max-w-xl text-grey-700 font-bold tracking-tighter leading-tight leading-none"
      >
        Making Open Source Look Different
      </h1>
      <hr class=" w-12 h-1 bg-nebula-500 rounded-full mt-8" />
      <p
        class="text-grey-500 text-lg md:text-2xl mt-8 font-normal leading-snug font-hind"
      >
        We provide an open platform where any developer, designer or customer can share, contribute or
        donate on any open source projects!
      </p>
      <div class="get-app flex space-x-5 mt-10 justify-center md:justify-start">
        <Button>Contribute</Button>
        <Button buttonColor="nebula">Projects</Button>
      </div>
    </div>

    <!-- hero image -->
    <div class="hero-image col-span-6">
      <HeroSVG />
    </div>
  </div>
  <!-- end hero -->
</template>

<script>
import HeroSVG from "../assets/images/hero.svg?inline";
import Button from "./Button";
export default {
  components: {
    HeroSVG,
    Button
  }
};
</script>

<style scoped>
.white-button {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
  background: linear-gradient(#fff, #e4e4e9) no-repeat;
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
}
.white-button:hover,
.white-button:focus {
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  -webkit-transform: translateY(-2px);
  -ms-transform: translateY(-2px);
  transform: translateY(-2px);
}
.white-button:active {
  box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11),
    inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #e4e4e9;
  transform: translateY(2px);
}
</style>
