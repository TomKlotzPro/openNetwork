<template>
  <div>
    <Navbar defaultNav />
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "~/components/shared/Navbar"
//import CustomNav from "~/components/shared/CustomNav"
import Footer from "~/components/shared/Footer"
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
