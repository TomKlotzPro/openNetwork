<template>
  <div>
    <div class="hero bg-gray-100 py-16 mb-6">
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <Hero />
      </div>
    </div>
    <div class="pt-24 bg-white sm:pt-40">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to send money.</h2>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <Feature styles="bg-grey-200">
            <template v-slot:svg>
              <svg
                class="h-6 w-6 text-grey-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </template>
            <template v-slot:headline>
              Project Visibility
            </template>
            <template v-slot:description>
              Our aim is to proviside visibility to all kinds of projects
              whatever they may be to potential contributors or investors
            </template>
          </Feature>
          <Feature styles="bg-grey-200">
            <template v-slot:svg>
              <svg
                class="h-6 w-6 text-grey-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </template>
            <template v-slot:headline>
              Project Contribution
            </template>
            <template v-slot:description>
              Our aim is to proviside visibility to all kinds of projects
              whatever they may be to potential contributors or investors
            </template>
          </Feature>
          <Feature styles="bg-grey-200">
            <template v-slot:svg>
              <svg
                class="h-6 w-6 text-grey-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </template>
            <template v-slot:headline>
              Instant Communication
            </template>
            <template v-slot:description>
              Our aim is to proviside visibility to all kinds of projects
              whatever they may be to potential contributors or investors
            </template>
          </Feature>
        </dl>
      </div>
    </div>
    <div
      class="max-w-xl mx-auto px-4 py-24 font-hind sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <ProjectCard :projects="projects" />
    </div>
    <div class="container px-4 sm:px-8 lg:px-16 font-hind xl:px-20 mx-auto">
      <div class="relative max-w-7xl mx-auto">
        <Header>
          <template v-slot:title>
            Featured Articles
          </template>
          <template v-slot:description>
            Have a look at these projects published by some of our community
            members!
          </template>
        </Header>
        <BlogPost :blogs="featuredBlogs" />
        <Button to="/blogs" buttonColor="nebula" class="mx-auto mt-12">Go to Blog</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "~/components/shared/Hero";
import Feature from "~/components/shared/Feature";
import ProjectCard from "~/components/ProjectCard";
import BlogPost from "~/components/BlogPost";
import { mapState } from "vuex";
export default {
  components: {
    Hero,
    ProjectCard,
    BlogPost
  },
  computed: {
    ...mapState({
      projects: state => state.project.items,
      featuredBlogs: state => state.blog.items.featured
    })
  },
  async fetch({ store }) {
    await store.dispatch("project/fetchProjects");
    await store.dispatch("blog/fetchFeaturedBlogs", {
      "filter[featured]": true
    });
  }
};
</script>
