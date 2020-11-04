<template>
  <!-- hero -->
      <!-- hero wrapper -->
      <div
        class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        <!-- hero text -->
        <div class="hero-text col-span-6">
          <h1
            class=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight"
          >
            Making Open Source Look Different
          </h1>
          <hr class=" w-12 h-1 bg-nebula rounded-full mt-8" />
          <p class="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
            We provide an open platform wer any developer can share, contribute
            or donate on any open source project!
          </p>
          <div
            class="get-app flex space-x-5 mt-10 justify-center md:justify-start"
          >
            <button
              class="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4"
            >
              <div class="logo">
                <MachineSVG class="w-6 h-6 machine" />
              </div>
              <div class="text">
                <p class=" text-xs text-gray-600" style="font-size: 0.5rem;">
                  START BY
                </p>
                <p class=" text-xs font-semibold text-gray-900">Contributing</p>
              </div>
            </button>
            <button
              class="google bg-orange-900 shadow-md px-3 py-2 rounded-lg flex items-center space-x-4"
            >
              <div class="image">
                <RocketSVG class="w-6 h-6 rocket" />
              </div>
              <div class="text">
                <p class="text-xs text-white" style="font-size: 0.5rem;">
                  SHARE YOUR
                </p>
                <p class="text-xs font-semibold text-white">Projects</p>
              </div>
            </button>
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
import MachineSVG from "../assets/images/machine.svg?inline";
import RocketSVG from "../assets/images/rocket.svg?inline";
export default {
  components: {
    HeroSVG,
    MachineSVG,
    RocketSVG
  }
};
</script>

<style scoped>
.bg-nebula {
  background-color: #5468ff;
}
.bg-saturn {
  background-color: #ec8b63;
}
.rocket .cls-1 {
  fill: #ec8b63;
}
.machine .cls-1 {
  fill: #ed5a6a;
}
.machine .cls-2 {
  fill: #ffd0d5
}
</style>
