<template>
  <Fragment>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6 mt-6">
        <div class="md:col-span-1 mx-auto">
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg font-semibold uppercase tracking-widest text-xs leading-6 text-grey-700 mb-2"
            >
              COURSE EDITING
            </h3>
            <ul class="mt-4 text-sm leading-5 text-gray-600">
              <li
                class="border-l-4 border-nebula-500 py-2 pl-4 pr-2 mb-4 rounded"
              >
                <a @click.prevent="() => {}" :class="'active'"
                  >Target Your Audience</a
                >
              </li>
              <li
                class="border-l-4 border-nebula-500 py-2 pl-4 pr-2 mb-4 rounded"
              >
                <a @click.prevent="() => {}" :class="'active'"
                  >Project Landing Page</a
                >
              </li>
            </ul>
          </div>

          <div class="px-4 sm:px-0">
            <h3
              class="text-lg font-semibold uppercase tracking-widest text-xs leading-6 text-grey-700 mb-2"
            >
              Project Management
            </h3>
            <ul class="mt-4 text-sm leading-5 text-gray-600">
              <li
                class="border-l-4 border-nebula-500 py-2 pl-4 pr-2 mb-4 rounded"
              >
                <a @click.prevent="() => {}" :class="'active'"
                  >Tags and Image</a
                >
              </li>
              <li
                class="border-l-4 border-nebula-500 py-2 pl-4 pr-2 mb-4 rounded"
              >
                <a @click.prevent="() => {}" :class="'active'">Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2 mr-8">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white sm:p-6">

                <!--- FIRST BLOCK --->
                <div class="w-full">
                  <h2
                    class="mt-0 text-sols font-hind text-lg xl:text-2xl font-normal leading-snug"
                  >
                    Target your Audience
                  </h2>
                </div>

                <div class="hidden w-full sm:block">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mt-3 flex rounded-md shadow-sm">
                    <input
                      id="company_website"
                      class="form-input flex-1 block w-full rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="What are the advantages of this project?"
                    />
                  </div>
                  <div class="mt-3 flex rounded-md shadow-sm">
                    <input
                      id="company_website"
                      class="form-input flex-1 block w-full rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="What are the advantages of this project?"
                    />
                  </div>
                </div>

                <!--- SECOND BLOCK --->

                <div class="hidden sm:block">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

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
                      http://
                    </span>
                    <input
                      id="git_repository"
                      class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>

                <!--- THIRD BLOCK --->

                <div class="hidden sm:block">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

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

                <!--- FOURTH BLOCK --->
                
                <div class="hidden sm:block">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Fragment>
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
