export const state = () => ({
  items: []
});

export const actions = {
  fetchUserProjects({ commit }) {
    return this.$axios
      .$get("/api/v1/products/user-products")
      .then(projects => {
        commit("setProjects", projects);
        return state.items;
      })
      .catch(error => {
        Promise.reject(error);
      });
  },
  createProject(_, courseData) {
    return this.$axios.$post("/api/v1/products", courseData);
  }
};

export const mutations = {
  setProjects(state, projects) {
    state.items = projects;
  }
};
