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
          Start reading awesome articles, then write your own and publish it
          straight from your workspace. Share your ideas and knowledge with the
          community.
        </p>
      </div>

      <BlogPost :blogs="publishedBlogs" />
      <div
        v-if="pagination.pageCount && pagination.pageCount > 1"
        class="bg-white px-4 py-3 font-hind flex items-center mt-8 justify-between border-t border-grey-200 sm:px-6"
      >
        <div
          class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
          <no-ssr placeholder="Loading...">
            <paginate
              v-model="currentPage"
              :pageCount="pagination.pageCount"
              :clickHandler="fetchBlogs"
              :prevText="previous"
              :nextText="next"
              :active-class="'bg-nebula-500 text-white border-nebula-500'"
              :next-link-class="
                'relative inline-flex items-center px-2 py-3 rounded-r border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              "
              :prev-link-class="
                'relative inline-flex items-center px-2 py-3 rounded-l border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              "
              :containerClass="'relative z-0 inline-flex shadow-sm -space-x-px'"
              :pageLinkClass="
                'relative inline-flex items-center px-4 py-3 border border-gray-200 bg-transparent text-sm font-medium'
              "
            >
            </paginate>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BlogPost from "~/components/BlogPost";
export default {
  head: {
    title: "ON | Knowledge starts with reading"
  },
  components: {
    BlogPost
  },
  computed: {
    ...mapState({
      publishedBlogs: state => state.blog.items.all,
      featuredBlogs: state => state.blog.items.featured,
      pagination: state => state.blog.pagination
    }),
    currentPage: {
      get() {
        return this.$store.state.blog.pagination.pageNum;
      },
      set(value) {
        this.$store.commit("blog/setPage", value);
      }
    }
  },
  data() {
    return {
      next: `<span class="sr-only">Next</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>`,
      previous: `<span class="sr-only">Previous</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>`
    };
  },
  async fetch({ store, query }) {
    const filter = {};
    const { pageNum, pageSize } = query;
    if (pageNum && pageSize) {
      filter.pageNum = parseInt(pageNum, 10);
      filter.pageSize = parseInt(pageSize, 10);
    } else {
      filter.pageNum = store.state.blog.pagination.pageNum;
      filter.pageSize = store.state.blog.pagination.pageSize;
    }
    await store.dispatch("blog/fetchBlogs", filter);
    await store.dispatch("blog/fetchFeaturedBlogs", {
      "filter[featured]": true
    });
  },
  methods: {
    setQueryPaginationParams() {
      const { pageSize, pageNum } = this.pagination;
      this.$router.push({ query: { pageNum, pageSize } });
    },
    fetchBlogs() {
      const filter = {};
      filter.pageSize = this.pagination.pageSize;
      filter.pageNum = this.pagination.pageNum;

      this.$store
        .dispatch("blog/fetchBlogs", filter)
        .then(_ => this.setQueryPaginationParams());
    }
  }
};
</script>
