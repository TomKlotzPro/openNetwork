<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-xs font-semibold text-nebula-600 tracking-widest uppercase"
        >
          OPENETWORK
        </h2>
        <p
          class="mt-1 text-4xl font-poppins font-extrabold text-sols sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          Knowledge Starts With Reading.
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Start reading awsome articles, then write your and publish straight
          from your workspace. Share your ideas and knowledge with the
          community.
        </p>
      </div>


      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div v-for="blog in publishedBlogs" :key="blog._id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a @click.prevent="$router.push(`/blogs/${blog.slug}`)" class="block mt-2">
                <p class="text-2xl font-hind font-normal text-sols">
                  {{blog.title}}
                </p>
                <p class="mt-3 text-sm leading-snug text-gray-500">
                  {{blog.paragraph | shortenText(150)  }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">{{blog.author.name}}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="blog.author.avatar"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-lg leading-7 font-normal text-grey-600">
                  <a href="#">
                    {{blog.author.name}}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm font-hind font-normal text-grey-500">
                  <time datetime="2020-03-10">
                    {{ blog.createdAt | formatDate }}
                  </time>
                  <span aria-hidden="true">
                    &middot;
                  </span>
                  <span>
                    {{ blog.content | readTime }} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      publishedBlogs: state => state.blog.items.all
    })
  },
  async fetch({store}) {
    await store.dispatch('blog/fetchBlogs')

}}
</script>
