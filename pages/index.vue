<template>
  <div>
    <div class="hero bg-gray-100 py-16 mb-6">
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <Hero />
      </div>
    </div>
    <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <h1
        class=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight"
      >
        Featured Projects
      </h1>
      <div
        class="project-wrapper grid grid-cols-1 md:grid-cols-2 gap-3 items-center"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "~/components/Hero";
import ProjectCard from "~/components/ProjectCard";
export default {
  components: {
    Hero,
    ProjectCard
  }
};
</script>
