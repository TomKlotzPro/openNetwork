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
        <Button to="/">Contribute</Button>
        <Button buttonType="a" href="http://google.com" buttonColor="nebula">Projects</Button>
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
import HeroSVG from "../../assets/images/hero.svg?inline";
import Button from "./Button";
export default {
  components: {
    HeroSVG,
    Button
  }
};
</script>
