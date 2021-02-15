<template>
  <div>
    <div class="hero bg-gray-100 py-16 mb-6">
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <Hero />
      </div>
    </div>
    <div class="pt-40 bg-white lg:pt-12">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to work together.</h2>
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
              Our aim is to provide visibility to all kinds of projects whatever
              they may be to potential contributors or investors
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
              Visbility is important, but what about making people access you
              project with a single click rathe than searching the whole web!
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
              Our goal is to be a knowledge endpoint reason while with provide
              communication through articles and through ou chat app.
            </template>
          </Feature>
        </dl>
      </div>
    </div>
    <div
      class="max-w-xl mx-auto px-4 py-24 font-hind sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="relative pb-20 lg:pb-20">
        <div class="relative max-w-7xl">
          <Cta
            image="standout.jpg"
            altImg="Standout"
            cta_type="image_in_container"
          >
            <template v-slot:headline>
              <span class="block">Ready to dive in?</span>
              <span class="block">Start now and stand out your project!</span>
            </template>
            <template v-slot:description>
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </template>
            <template v-slot:button>
              <Button to="/signup" buttonColor="nebula" class="mx-auto mt-12"
                >Sign up</Button
              >
            </template>
          </Cta>
          <Cta
            image="collaborate.jpg"
            altImg="Standout"
            cta_type="image_next_to_container"
          >
            <template v-slot:intro>
              Always striving for the best! 🚀
            </template>
            <template v-slot:headline>
              Collaboration and success stories
            </template>
            <template v-slot:description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </template>
            <template v-slot:button>
              <Button to="/projects" buttonColor="black" class="mx-auto mt-12"
                >Projects</Button
              >
            </template>
          </Cta>
        </div>
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
import Hero from "~/components/shared/Hero";
import Feature from "~/components/shared/Feature";
import ProjectCard from "~/components/ProjectCard";
import BlogPost from "~/components/BlogPost";
import Button from "~/components/shared/Button";
import Header from "~/components/shared/Header";
import Cta from "~/components/shared/Cta";
import Newsletter from "~/components/shared/Newsletter";
import ProjectCardTooltip from "~/components/ProjectCardTooltip";
import { mapState } from "vuex";
export default {
  head: {
    title: "Open Network - Where knowledge has no boundries"
  },
  components: {
    Hero,
    ProjectCard,
    BlogPost,
    Button,
    Header,
    Cta,
    Newsletter,
    ProjectCardTooltip
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
