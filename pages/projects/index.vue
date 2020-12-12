<template>
  <div>
    <div
      class="max-w-xl mx-auto px-4 py-12 font-hind sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="relative pt-12 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-20 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <Header>
            <template v-slot:title>
              Open Source Projects
            </template>
            <template v-slot:description>
              Have a look at all these amazing open source projects created and
              produced by the open source community
            </template>
          </Header>
          <div
            class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
          >
            <div
              v-for="project in projects"
              :key="project._id"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <v-popover offset="16" trigger="hover" placement="right-start">
                <ProjectCard :project="project" />
                <template slot="popover">
                  <ProjectCardTooltip
                    :title="project.title"
                    :subtitle="project.subtitle"
                    :description="project.description"
                    :category="project.category.name"
                    :author="project.author"
                  />
                </template>
              </v-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard";
import ProjectCardTooltip from "~/components/ProjectCardTooltip";
import { mapState } from "vuex";
export default {
  head: {
    title: "ON | Create or Contribute on any Open Source Project"
  },
  components: {
    ProjectCard,
    ProjectCardTooltip
  },
  computed: {
    ...mapState({
      projects: state => state.project.items
    })
  },
  async fetch({ store }) {
    await store.dispatch("project/fetchProjects");
  }
};
</script>
