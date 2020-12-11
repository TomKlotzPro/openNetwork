<template>
  <div class="relative pt-12 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-20 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <Header>
        <template v-slot:title>
          Published Projects
        </template>
        <template v-slot:description>
          Have a look at these projects published by some of our community
          members!
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
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                :src="project.image"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <template v-if="project.tags">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="inline-flex ml-1 items-center px-3 py-0.5 rounded text-sm font-medium bg-nebula-100 text-nebula-800"
                  >
                    #{{ tag }}
                  </span>
                </template>
                <template v-else>
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded text-sm font-medium bg-nebula-100 text-nebula-800"
                  >
                    #ON
                  </span>
                </template>
                <nuxt-link :to="`/projects/${project.slug}`" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{ project.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    {{ project.subtitle | shortenText(200) }}
                  </p>
                </nuxt-link>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <span>
                    <span class="sr-only">{{ project.author.name }}</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="project.author.avatar"
                      alt=""
                    />
                  </span>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <span class="hover:underline">
                      {{ project.author.name }}
                    </span>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">
                      {{ project.createdAt | formatDate }}
                    </time>
                  </div>
                </div>
              </div>
            </div>
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
      <Button to="/projects" buttonColor="nebula" class="mx-auto mt-12"
        >Go to Projects</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import Header from "~/components/shared/Header";
import ProjectCardTooltip from "~/components/ProjectCardTooltip";
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  components: {
    Button
  },
  computed: {
    grid() {
      if (this.projects.length >= 3) {
        return "lg:grid-cols-3";
      } else if (this.projects.length === 2) {
        return "lg:grid-cols-2";
      } else {
        return "lg:grid-cols-1";
      }
    }
  }
};
</script>

<style scoped>
.white-space {
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
