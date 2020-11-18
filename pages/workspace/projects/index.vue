<template>
  <Fragment>
    <Navbar exitLink="/">
      <template #actionMenu>
        <Button to="/workspace/project/create" buttonColor="nebula" buttonWidth="40">
          New Project
        </Button>
      </template>
    </Navbar>
    <!-- HEADER COMPONENT -->
    <header class="bg-white py-8 lg:py:12 px-6 relative text-center">
      <div class="m-auto relative max-w-lg md:max-w-6xl">
        <h1 class="m-0 mx-auto text-grey-800 h1_ch font-poppins text-4xl lg:text-5xl tracking-tight font-bold leading-none txt_shadow">Your Projects</h1>
        <h3 class="mx-auto mt-2 mb-0 text-grey-500 justify-center h3_ch font-hind text-lg lg:text-text-2xl font-normal leading-snug">Create, edit, delete, save, publish, ...</h3>
      </div>
    </header>
    <!-- HEADER COMPONENT -->
    <WorkSpaceProjectCard
    v-for="project in projects"
    :key="project._id"
    :title="project.title"
    :description="project.description"
    :image="project.image"
    :status="project.status"
    buttonActionName="Update"
    />
  </Fragment>
</template>

<script>
import Button from "~/components/Button";
import Navbar from "~/components/Navbar";
import WorkSpaceProjectCard from "~/components/WorkSpaceProjectCard"
import { Fragment } from "vue-fragment";
export default {
  layout: "workspace",
  components: {
    Button,
    Navbar,
    Fragment,
    WorkSpaceProjectCard
  },
  computed: {
    projects() {
      return this.$store.state.user.project.items
    }
  },
  /**
   * fetch() : when server-rendering the page,
   * set fetchOnServer to false if we only want fetch on client side ;) (Just discovered this options on Nuxt's doc)
   */
  fetch({store}) {
    return store.dispatch('user/project/fetchUserProjects')
  }
};
</script>

<style scoped>
.h1_ch {
  max-width: 35ch
}
.h3_ch {
  max-width: 60ch;
}
/* .txt_shadow {
  text-shadow: rgba(0,0,0,0.4) 20px 12px 24px;
} */
</style>
