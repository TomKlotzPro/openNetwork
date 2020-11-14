<template>
  <Fragment>
    <div class="banner bg-white"></div>
    <Navbar/>
    <div class="mt-32 grid">
      <div class="w-full text-center">
        <p
          class="mt-0 mb-2 text-grey-400 font-poppins text-sm lg:text-sm font-semibold tracking-widest uppercase"
        >
          Openetwork welcomes you to your workspace
        </p>
        <h1
          class="text-grey-800 font-poppins text-4xl lg:text-5xl font-bold tracking-tight leading-none"
        >
          What do you want to do today?
        </h1>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 mx-auto my-12">
        <WorkSpaceCard title="Manage your projects" image="project.png" @on-click="() => $router.push('/workspace/projects')">
          Within this section, Create, Add, Edit and Publish your amazing
          projects to the entire community!
        </WorkSpaceCard>

        <WorkSpaceCard title="Blog Writers" image="blog.png">
          Open source is all about sharing and giving out to others. Enter,
          write and help others with your amazing knowledge!
        </WorkSpaceCard>

        <WorkSpaceCard title="ON Chat App" image="chat.png">
          What else can be more interesting than insant communication? Give a
          try to ON Chat App!
        </WorkSpaceCard>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import WorkSpaceCard from "@/components/WorkSpaceCard";
import Navbar from "~/components/Navbar"
export default {
  middleware: "auth",
  layout: "workspace",
  components: {
    Fragment,
    WorkSpaceCard,
    Navbar
  }
};
</script>
