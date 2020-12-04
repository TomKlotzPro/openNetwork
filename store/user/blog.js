export const state = () => ({
  items: {
    drafts: [],
    published: []
  },
  item: {},
  isSaving: false
});

function seperateBlogs(blogs) {
  const published = []
  const drafts = []

  blogs.forEach(blog => {
    blog.status === 'active' ? drafts.push(blog) : published.push(blog)
  })

  return {published, drafts}
}
export const actions = {
  createBlog(_, blogData) {
    return this.$axios
      .$post("/api/v1/blogs", blogData)
      .then(blog => blog)
      .catch(error => Promise.reject(error));
  },
  fetchBlogById({ commit }, blogId) {
    return this.$axios
      .$get(`/api/v1/blogs/${blogId}`)
      .then(blog => commit("setBlog", blog));
  },
  fetchUserBlogs({commit, state}) {
    return this.$axios.get(`/api/v1/blogs/me`)
    .then(blogs => {
      debugger
      const {published, drafts} = seperateBlogs(blogs.data)
      commit('setBlogs', {resource: 'drafts', items: drafts})
      commit('setBlogs', {resource: 'published', items: published})

      published, drafts
    })
  },
  updateBlog({ commit }, { data, id }) {
    commit('setIsSaving', true)
    return this.$axios
      .$patch(`/api/v1/blogs/${id}`, data)
      .then(blog => {
        commit("setBlog", blog);
        commit('setIsSaving', false)
        return state.item;
      })
      .catch(error => {
        commit('setIsSaving', false)
        return Promise.reject(error)
      });
  }
};

export const mutations = {
  setBlog(state, blog) {
    state.item = blog;
  },
  setIsSaving(state, isSaving) {
    state.isSaving = isSaving;
  },
  setBlogs(state, {resource, items}) {
    state.items[resource] = items
  }
};
