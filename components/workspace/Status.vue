<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Status
      </h2>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label
          for="project_status"
          class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
          >Status</label
        >
        <select
          id="project_status"
          class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        >
          <option value="default">Change Status</option>
          <option value="active">Active</option>
          <option value="published">Published</option>
        </select>
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
