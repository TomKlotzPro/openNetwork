<template>
  <span>
    <ProductHero
      :image="project.image"
      :name="project.author.name"
      :productLink="project.productLink"
      :title="project.title"
      :subtitle="project.subtitle"
      :tags="project.tags"
      :createdAt="project.createdAt"
    />
    <div
      class="lg:mt-0 relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-12 lg:px-8"
    >
      <div class="relative max-w-7xl mx-auto">
        <div class="text-left">
          <h2 class="text-lg leading-6 font-medium text-gray-900">
            Project Value
          </h2>
          <p class="mt-1 max-w-2xl text-gray-500 sm:mt-2 text-sm">
            Experience gained why joining the project.
          </p>
        </div>

        <ul class="mt-4 grid gap-3 lg:grid-cols-2 lg:max-w-none">
          <li
            v-for="wsl in project.wsl"
            :key="wsl.value"
            class="group flex flex-col border border-gray-300 bg-white rounded shadow"
          >
            <div class="rounded  px-6 py-6 hover:border-gray-400 sm:flex">
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="font-medium text-gray-900">
                    {{ wsl.value }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="lg:mt-0 relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Project Info
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              A detailed overview of the project.
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <div
                  class="mt-1 text-sm text-gray-900 project"
                  v-html="project.description"
                ></div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import Button from "~/components/shared/Button";
import ProductHero from "~/components/ProductHero";
export default {
  head() {
    return {
      title: this.project.title,
      meta: [
        {hid: 'description', name: 'description', content: this.project.subtitle}
      ]
    }
  },
  components: {
    Button
  },
  computed: {
    project() {
      return this.$store.state.project.item;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("project/fetchProjectBySlug", params.slug);
  }
};
</script>

<style>
.project ul {
  list-style-type: disc;
  padding-left: 1rem;
}
.project ol {
  list-style-type: decimal;
  padding-left: 1rem;
}
.project p {
  min-height: 30px;
}
</style>
