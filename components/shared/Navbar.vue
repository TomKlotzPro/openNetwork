<template>
  <span>
    <nav class="justify-center flex items-center bg-grey-100 p-3 flex-wrap">
      <nuxt-link to="/" class="p-2 mr-4 inline-flex items-center">
        <LogoNode class="fill-current text-white h-8 w-8 mr-2" />
        <span
          class="text-xl text-nebula-500 font-ubuntu tracking-tighter font-medium"
          >Openetwork</span
        >
      </nuxt-link>
      <span v-if="dafaultNav">
        <Search />
      </span>
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
          <template v-if="isAuth">
            <span
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 text-nebula-500 items-center justify-center uppercase tracking-widest font-semibold text-xs"
            >
              Hi {{ user.username }}
            </span>
            <template v-if="dafaultNav">
              <CustomLink event @on-click="() => $router.push('/workspace')"
                >Workspace</CustomLink
              >
              <CustomLink link="/blogs">Blogs</CustomLink>
              <CustomLink event @on-click="logout">Log out</CustomLink>
            </template>
            <template v-else>
              <slot name="actionMenu"></slot>
              <Button v-if="exitLink" :to="exitLink" class="ml-2" buttonWidth="40">Exit</Button>
            </template>
          </template>
          <template v-else>
            <template v-if="dafaultNav">
              <CustomLink link="/about">About</CustomLink>
              <CustomLink link="/blogs">Blogs</CustomLink>
              <CustomLink link="/signin">Log in</CustomLink>
              <CustomLink link="/signup">Sign up</CustomLink>
            </template>
          </template>
          <!-- <template v-if="!dafaultNav">
          </template> -->
        </div>
      </div>
    </nav>
  </span>
</template>

<script>
import Search from "~/components/Search";
import CustomLink from "~/components/CustomLink";
import LogoNode from "../../assets/images/opentwk.svg?inline";
import Button from "./Button";
import { mapGetters } from "vuex";

export default {
  props: {
    dafaultNav: {
      type: Boolean,
      required: false,
      default: false
    },
    exitLink: {
      type: String,
      required: false
    }
  },
  components: {
    Search,
    LogoNode,
    CustomLink,
    Button
  },
  mounted() {
    if(this.isAuth) {
      if(!this.user.confirmed) {
        this.$toasted.global.on_warning({
          message: "We recommend you to confirm your email !"
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
      isAuth: "auth/isAuthenticated"
    })
  },
  methods: {
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(() => this.$router.push("/signin"));
    }
  }
};
</script>

<style></style>
