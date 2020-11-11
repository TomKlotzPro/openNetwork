<template>
  <span>
    <nav class="justify-center flex items-center bg-grey-100 p-3 flex-wrap">
      <a href="/" class="p-2 mr-4 inline-flex items-center">
        <LogoNode class="fill-current text-white h-8 w-8 mr-2" />
        <span
          class="text-xl text-nebula-500 font-ubuntu tracking-tighter font-medium"
          >Openetwork</span
        >
      </a>
      <Search />
      <button
        class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i class="material-icons">Menu</i>
      </button>
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <nuxt-link
            to="/about"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-grey-500 items-center justify-center uppercase hover:text-nebula-500 tracking-widest font-semibold text-xs"
          >
            <span>About</span>
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-grey-500 items-center justify-center uppercase hover:text-nebula-500 tracking-widest font-semibold text-xs"
          >
            <span>Contact Us</span>
          </nuxt-link>
          <nuxt-link
            to="/login"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-grey-500 items-center justify-center uppercase hover:text-nebula-500 tracking-widest font-semibold text-xs"
          >
            <span>Log in</span>
          </nuxt-link>
          <nuxt-link
            to="signup"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-grey-500 items-center justify-center uppercase hover:text-nebula-500 tracking-widest font-semibold text-xs"
          >
            <span>Sign up</span>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </span>
</template>

<script>
import Search from "~/components/Search";
import LogoNode from "../assets/images/opentwk.svg?inline";

export default {
  components: {
    Search,
    LogoNode
  }
};
</script>

<style></style>
