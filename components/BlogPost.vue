<template>
  <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    <div
      v-for="blog in blogs"
      :key="blog._id"
      class="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p
            class="inline-flex items-center px-3 py-0.5 rounded text-xs font-semibold uppercase tracking-widest"
            :class="
              blog.featured
                ? 'bg-nebula-100 text-nebula-500'
                : 'bg-white text-white'
            "
          >
            <a v-if="blog.featured" href="#" class="hover:underline">
              🙌 Featured
            </a>
          </p>
          <a
            @click.prevent="$router.push(`/blogs/${blog.slug}`)"
            class="block mt-2"
          >
            <p class="text-2xl font-hind font-normal text-sols">
              {{ blog.title }}
            </p>
            <p class="mt-3 text-sm leading-snug text-gray-500">
              {{ blog.paragraph | shortenText(150) }}
            </p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">{{ blog.author.name }}</span>
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
                {{ blog.author.name }}
              </a>
            </p>
            <div
              class="flex space-x-1 text-sm font-hind font-normal text-grey-500"
            >
              <time datetime="2020-03-10">
                {{ blog.createdAt | formatDate }}
              </time>
              <span aria-hidden="true">
                &middot;
              </span>
              <span> {{ blog.content | readTime }} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogs: Array
  },
};
</script>

<style scoped></style>
