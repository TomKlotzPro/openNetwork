<template>
<Fragment>
  <Navbar exitLink="/"></Navbar>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <h2
            class="text-2xl font-bold font-poppins leading-7 text-sols sm:text-5xl sm:truncate"
          >
            Your Articles
          </h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <Button @click.native="$router.push('/workspace/blog/editor')" buttonType="button" buttonColor="nebula">New Article</Button
          >
        </div>
      </div>
      <div>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          >
            <option>Drafts</option>
            <option>Published</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#"
                class="group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                <svg
                  class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Drafts</span>
              </a>
              <a
                href="#"
                class="group inline-flex items-center py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm text-indigo-600"
                aria-current="page"
              >
                <svg
                  class="-ml-0.5 mr-2 h-5 w-5 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span>Published</span>
              </a>
            </nav>
          </div>
        </div>
        <ul
          class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <li class="col-span-1 flex shadow-sm rounded-md">
            <div
              class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md"
            >
              GA
            </div>
            <div
              class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
            >
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  class="text-gray-900 font-medium hover:text-gray-600"
                  >Graph API</a
                >
                <p class="text-gray-500">16 Members</p>
              </div>
            </div>
          </li>

          <li class="col-span-1 flex shadow-sm rounded-md">
            <div
              class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md"
            >
              CD
            </div>
            <div
              class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
            >
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  class="text-gray-900 font-medium hover:text-gray-600"
                  >Component Design</a
                >
                <p class="text-gray-500">12 Members</p>
              </div>
            </div>
          </li>

          <li class="col-span-1 flex shadow-sm rounded-md">
            <div
              class="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-500 text-white text-sm font-medium rounded-l-md"
            >
              T
            </div>
            <div
              class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
            >
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  class="text-gray-900 font-medium hover:text-gray-600"
                  >Templates</a
                >
                <p class="text-gray-500">16 Members</p>
              </div>
            </div>
          </li>

          <li class="col-span-1 flex shadow-sm rounded-md">
            <div
              class="flex-shrink-0 flex items-center justify-center w-16 bg-green-500 text-white text-sm font-medium rounded-l-md"
            >
              RC
            </div>
            <div
              class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
            >
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  class="text-gray-900 font-medium hover:text-gray-600"
                  >React Components</a
                >
                <p class="text-gray-500">8 Members</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </Fragment>
</template>

<script>
import Button from "~/components/shared/Button";
import { Fragment } from "vue-fragment";
import Navbar from "~/components/shared/Navbar";
export default {
  layout: 'workspace',
  components: {
    Button,
    Fragment,
    Navbar
  },
  async fetch({store}) {
    await store.dispatch('user/blog/fetchUserBlogs')
  }
};
</script>
