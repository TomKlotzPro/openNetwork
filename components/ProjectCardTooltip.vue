<template>
  <div class="px-2 w-screen max-w-xs sm:px-0">
    <div
      class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        <span
          class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
        >
          <p class="text-base font-medium text-gray-900">
            Title
          </p>
          <p class="mt-1 text-sm text-gray-500">
            {{ title }}
          </p>
        </span>

        <span
          class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
        >
          <p class="text-base font-medium text-gray-900">
            Subtitle
          </p>
          <p class="mt-1 text-sm text-gray-500">
            {{ subtitle }}
          </p>
        </span>

        <span
          class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
        >
          <p class="text-base font-medium text-gray-900">
            Category
          </p>
          <p class="mt-1 text-sm text-gray-500">
            {{ category }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    author: {
      type: Object,
      required: false
    }
  }
};
</script>

<style></style>
