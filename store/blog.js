import Vue from 'vue'

export const state = () => ({
  item: {},
  items: {
    all: [],
    featured: []
  },
  pagination: {
    count: 0, //Count all of our published articles/blogs
    pageCount: 0, // Number of pages to display
    pageSize: 6, // Number of items to display per page
    pageNum: 1 // Current page
  }
});

export const actions = {
  fetchBlogs({ commit, state }, filter) {
    const url = this.$applyParamsToUrl('/api/v1/blogs', filter)
    return this.$axios
      .$get(url)
      .then(data => {
        const {blogs, count, pageCount} = data;
        commit("setBlogs", { resource: "all", blogs });
        commit("setPagination", {count, pageCount});
        return state.items.all;
      })
      .catch(error => Promise.reject(error));
  },
  fetchFeaturedBlogs({commit, state}, filter) {
    const url = this.$applyParamsToUrl('/api/v1/blogs', filter)
    return this.$axios.$get(url)
    .then(data => {
      const blogs = data.blogs;
      commit("setBlogs", { resource: "featured", blogs });
      return state.items.featured;
    })
    .catch(error => Promise.reject(error));
  },
  fetchBlogBySlug({ commit, state }, slug) {
    return this.$axios
      .get(`/api/v1/blogs/s/${slug}`)
      .then(blog => {
        commit("setBlog", blog.data);
        return state.item;
      })
      .catch(error => Promise.reject(error));
  }
};

export const mutations = {
  setBlogs(state, { resource, blogs }) {
    state.items[resource] = blogs;
  },
  setBlog(state, blog) {
    state.item = blog;
  },
  setPage(state, currentPaage) {
    Vue.set(state.pagination, 'pageNum', currentPaage)
  },
  setPagination(state, {count, pageCount}) {
    Vue.set(state.pagination, 'count', count)
    Vue.set(state.pagination, 'pageCount', pageCount)
  }
};
