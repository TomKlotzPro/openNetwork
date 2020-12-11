<template>
  <section class="max-w-full flex">
    <div class="w-screen max-w-3xl mx-auto py-4">
      <div class="flex flex-col bg-white shadow-xl">
        <div class="divide-y divide-gray-200">
          <div class="pb-6">
            <div class="bg-sols h-24 sm:h-20 lg:h-28"></div>
            <div
              class="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15"
            >
              <div>
                <div class="-m-1 flex">
                  <div
                    class="inline-flex rounded overflow-hidden border-4 border-white"
                  >
                    <img
                      class="flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48 object-cover"
                      :src="image"
                      :alt="name"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:ml-6 sm:flex-1">
                <div>
                  <div class="flex items-center">
                    <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">
                      {{ name }}
                    </h3>
                    <span
                      class="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"
                    >
                      <span class="sr-only">Online</span>
                    </span>
                  </div>
                  <p class="text-sm text-gray-500">
                    @{{ name | slugifyName }}
                  </p>
                </div>
                <div
                  class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
                >
                  <Button
                    buttonType="a"
                    :href="productLink"
                    target="_blank"
                    buttonColor="nebula"
                    class="w-full sm:flex-1"
                    >Git Repo</Button
                  >
                  <Button buttonType="button" class="w-full sm:flex-1"
                    >Donate</Button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-5 sm:px-0 sm:py-0">
            <dl class="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Title
                </dt>
                <dd
                  class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2"
                >
                  <p>
                    {{ title }}
                  </p>
                </dd>
              </div>
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Subtitle
                </dt>
                <dd
                  class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2"
                >
                  {{ subtitle }}
                </dd>
              </div>
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Tags
                </dt>
                <dd
                  class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2"
                >
                  <span class="inline-block">
                    <span
                      v-for="tag in tags"
                      :key="tag"
                      class="inline-flex items-center ml-2 px-3 py-0.5 rounded text-sm font-medium bg-nebula-100 text-nebula-800"
                    >
                      #{{ tag }}
                    </span>
                  </span>
                </dd>
              </div>
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Created Date
                </dt>
                <dd
                  class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2"
                >
                  <time datetime="1982-06-23">
                    {{ createdAt | formatDate }}
                  </time>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "~/components/shared/Button";
export default {
  components: {
    Button
  },
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    productLink: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
  }
};
</script>

<style></style>
