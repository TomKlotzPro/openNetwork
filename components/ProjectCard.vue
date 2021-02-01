<template>
  <Fragment>
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="project.image" alt="" />
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
        <div class="ml-auto">
          <button
            @click="createUpvote"
            class="group font-bold flex flex-col py-4 px-6 bg-gray-100 border border-gray-300 rounded hover:bg-blue-800"
          >
            <div class="content-center">
              <svg
                class="h-3 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="group-hover:text-white">{{
                project.upvotes.length
              }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    Fragment
  },
  methods: {
    createUpvote() {
      this.$store
        .dispatch("project/upvoteProject", this.project._id)
        .catch(() =>
          this.$toasted.global.on_warning({
            message: "You need to be connected, please log in before upvoting!"
          })
        );
    }
  },
};
</script>
