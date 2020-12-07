export const state = () => ({
  item: {},
  items: {
    all: [],
    featured: []
  }
});

export const actions = {
  fetchBlogs({ commit, state }) {
    return this.$axios
      .$get("/api/v1/blogs")
      .then(data => {
        const blogs = data.blogs;
        commit("setBlogs", { resource: "all", blogs });
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
  }
};
