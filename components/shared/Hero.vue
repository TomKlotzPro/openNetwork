<template>
  <main class="lg:relative">
    <div
      class="mx-auto max-w-7xl w-full pt-16 pb-16 text-center lg:py-16 lg:text-left"
    >
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1
          class="text-4xl font-poppins tracking-tight font-extrabold text-sols sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
        >
          <span class="block xl:inline">Making Open Source</span>
          <span class="block text-nebula-600 xl:inline">Look Different</span>
        </h1>
        <p
          class="mt-3 font-hind max-w-md mx-auto text-lg text-grey-500 sm:text-xl md:mt-5 md:max-w-3xl"
        >
          We provide an open platform where any developer, designer or customer
          can share, contribute or donate on any open source projects!
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <Button to="/projects">Contribute</Button>
          <Button
            to="/projects"
            buttonColor="nebula"
            class="ml-4"
            >Projects</Button
          >
        </div>
      </div>
    </div>
    <div
      class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
    >
      <img
        class="absolute inset-0 w-auto h-auto object-cover"
        src="~/assets/images/hero.svg"
        alt=""
      />
    </div>
  </main>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button
  }
};
</script>
