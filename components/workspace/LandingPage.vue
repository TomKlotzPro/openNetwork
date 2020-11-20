<template>
  <span>
    <div class="w-full">
      <h2
        class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
      >
        Project Landing Page
      </h2>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="col-span-6 mb-3">
      <label
        for="project_title"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Project Title</label
      >
      <input
        id="project_title"
        type="text"
        class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        placeholder="ES6 BackEnd REST API"
      />
    </div>
    <div class="col-span-6 mb-3">
      <label
        for="project_sub_title"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Project subtitle</label
      >
      <input
        id="project_sub_title"
        type="text"
        class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        placeholder="Implementing the NextGen JavaScript BackEnd REST API"
      />
    </div>
    <div class="col-span-6 mb-3">
      <label
        for="project_description"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Project Description</label
      >
      <div class="rounded-md shadow-sm">
        <textarea
          id="project_description"
          rows="3"
          class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          placeholder="Write something catchy about your awesome project!"
        ></textarea>
      </div>
    </div>

    <div class="col-span-6 sm:col-span-3 mb-3">
      <label
        for="project_category"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Project Category</label
      >
      <select
        id="project_category"
        class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      >
        <option>Web Development</option>
        <option>Mobile Development</option>
        <option>Software Development</option>
      </select>
    </div>

    <div class="col-span-6 sm:col-span-3">
      <label
        for="git_repository"
        class="block leading-5 pt-1 text-grey-700 font-poppins tracking-wider uppercase font-bold text-xs"
        >Git Repository</label
      >
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        >
          URL
        </span>
        <input
          id="git_repository"
          class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          placeholder="https://www.example.com"
        />
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
