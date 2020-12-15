<template>
  <Fragment>
    <Navbar exitLink="/workspace"></Navbar>
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
            <Button
              @click.native="$router.push('/workspace/blog/editor')"
              buttonType="button"
              buttonColor="nebula"
              >New Article</Button
            >
          </div>
        </div>
        <div class="grid">
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <span @click="activeTab = 0">
                  <a
                    class="group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                    :class="
                      activeTab === 0
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    "
                  >
                    <svg
                      class="-ml-0.5 mr-2 h-5 w-5"
                      :class="
                        activeTab === 0
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      "
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
                </span>
                <span @click="activeTab = 1">
                  <a
                    class="group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                    :class="
                      activeTab === 1
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    "
                    aria-current="page"
                  >
                    <svg
                      class="-ml-0.5 mr-2 h-5 w-5"
                      :class="
                        activeTab === 1
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      "
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
                </span>
              </nav>
            </div>
          </div>
          <template v-if="activeTab === 0">
            <ul
              v-if="drafts && drafts.length > 0"
              class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              <li
                v-for="draft in drafts"
                :key="draft._id"
                class="col-span-1 flex shadow-sm rounded-md"
              >
                <div
                  class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium uppercase rounded-l-md"
                  :class="`bg-sols`"
                >
                  {{ blogAvatar(draft.title) }}
                </div>
                <div
                  class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                >
                  <div class="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href="#"
                      class="text-gray-900 font-medium hover:text-gray-600"
                      >{{ displayBlogTitle(draft) }}</a
                    >
                    <p class="text-gray-500">
                      Last edited {{ draft.updatedAt | formatDate }}
                    </p>
                  </div>
                  <Dropdown
                    :items="draftOptions"
                    @optionChanged="handleOption($event, draft)"
                  />
                </div>
              </li>
            </ul>
            <Information v-else info="No Drafts" />
          </template>
          <template v-if="activeTab === 1">
            <ul
              v-if="published && published.length > 0"
              class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              <li
                v-for="publish in published"
                :key="publish._id"
                class="col-span-1 flex shadow-sm rounded-md"
              >
                <div
                  class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium uppercase rounded-l-md"
                  :class="`bg-nebula-600`"
                >
                  {{ blogAvatar(publish.title) }}
                </div>
                <div
                  class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                >
                  <div class="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href="#"
                      class="text-gray-900 font-medium hover:text-gray-600"
                      >{{ displayBlogTitle(publish) }}</a
                    >
                    <p class="text-gray-500">
                      Last edited {{ publish.updatedAt | formatDate }}
                    </p>
                  </div>
                  <Dropdown
                    :items="publishedOptions(publish.featured)"
                    @optionChanged="handleOption($event, publish)"
                  />
                </div>
              </li>
            </ul>
            <Information v-else info="No Published Article" />
          </template>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import Button from "~/components/shared/Button";
import { Fragment } from "vue-fragment";
import Navbar from "~/components/shared/Navbar";
import Information from "~/components/shared/Information";
import Dropdown from "~/components/shared/Dropdown";
import { mapState } from "vuex";
import {
  createPublishedOptions,
  createDraftsOptions,
  commands
} from "~/pages/workspace/options";
export default {
  /**
   * data with having activeTab variable to switch between Drafts and Published
   * 0 to represent drafts
   * 1 to represent published
   */
  layout: "workspace",
  components: {
    Button,
    Fragment,
    Navbar,
    Information,
    Dropdown
  },
  data() {
    return {
      activeTab: 0,
      colors: [
        "blueGray",
        "coolGray",
        "red",
        "amber",
        "emerald",
        "blue",
        "indigo",
        "violet",
        "pink",
        "gray",
        "orange",
        "yellow",
        "grey",
        "trueGray",
        "warmGray",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "lightBlue",
        "blue",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "nebula"
      ]
    };
  },
  computed: {
    ...mapState({
      published: ({ user }) => user.blog.items.published,
      drafts: ({ user }) => user.blog.items.drafts
    }),
    draftOptions() {
      return createDraftsOptions();
    },
  },
  methods: {
    blogAvatar(projectTitle) {
      if (!projectTitle) return "💭";
      else if (projectTitle.split(" ").length >= 2) {
        return projectTitle
          .split(" ")[0]
          .substring(0, 1)
          .concat(projectTitle.split(" ")[1].substring(0, 1));
      } else return projectTitle.substring(0, 1);
    },
    handleOption(command, blog) {
      if (command === commands.EDIT_ARTICLE) {
        this.$router.push(`/workspace/blog/${blog._id}/edit`);
      }
      if (command === commands.DELETE_ARTICLE) {
        this.displayDeleteWarning(blog);
      }
      if (command === commands.TOGGLE_FEATURE) {
        this.updateBlog(blog);
      }
    },
    updateBlog(blog) {
      const featured = !blog.featured;
      const featureStatus = featured ? "featured" : "unfeatured";
      this.$store
        .dispatch("user/blog/updatePublishedBlog", {
          id: blog._id,
          data: { featured }
        })
        .then(_ => {
          this.$toasted.global.on_success({
            message: `Your article has been ${featureStatus}!`
          });
          this.isOpen = false;
        })
        .catch(error => {
          this.$toasted.global.on_error({
            message: "Sorry something went wrong!"
          });
        });
    },
    publishedOptions(isFeatured) {
      return createPublishedOptions(isFeatured);
    },
    displayDeleteWarning(blog) {
      const isConfirm = confirm(
        "Are you sure you want to delete this article ?"
      );
      if (isConfirm) {
        this.$store
          .dispatch("user/blog/deleteBlog", blog)
          .then(_ => {
            this.$toasted.global.on_success({
              message: "Article was successfully deleted!"
            });
            this.isOpen = false;
          })
          .catch(error => {
            this.$toasted.global.on_error({
              message: "Sorry something went wrong!"
            });
          });
      }
    },
    displayBlogTitle(blog) {
      return (
        blog.title || blog.subtitle || "Article without title && subtitle 💭"
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("user/blog/fetchUserBlogs");
  }
};
</script>
