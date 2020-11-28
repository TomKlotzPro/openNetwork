<template>
  <div class="flex flex-col mb-auto">
    <Navbar dafaultNav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/shared/Navbar";
import Footer from "~/components/shared/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
