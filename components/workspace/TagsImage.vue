<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Tags and Image
      </h2>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div class="col-span-6">
      <label
        for="project_tags"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Tags</label
      >
      <input
        id="project_tags"
        class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />
    </div>
    <div class="mt-6">
      <label
        for="project_hero"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Cover Image</label
      >
      <div
        class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
      >
        <div class="text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="mt-1 text-sm text-gray-600">
            <button
              class="font-medium text-nebula-500 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Upload a file
            </button>
          </p>
          <p class="mt-1 text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment
  }
};
</script>

<style></style>
