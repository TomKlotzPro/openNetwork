export const state = () => {
  return {
    items: [],
    item: {}
  };
};

export const actions = {
  fetchProjects({ commit }) {
    return this.$axios.$get("/api/v1/products").then(projects => {
      commit(
        "setItems",
        { resource: "project", items: projects },
        { root: true }
      );
      return state.items;
    });
  },
  fetchProjectBySlug({ commit, state }, projectSlug) {
    return this.$axios
      .$get(`/api/v1/products/s/${projectSlug}`)
      .then(project => {
        commit("setProject", project);
        return state.item;
      })
      .catch(error => Promise.reject(error));
  },
  upvoteProject({ commit }, projectId) {
    return this.$axios
      .$post("/api/v1/upvotes")
      .then(upvoteCreated =>
        this.$axios.$patch(
          `/api/v1/products/${projectId}/upvote`,
          upvoteCreated
        )
      )
      .catch(err => {
        Promise.reject(err);
      })
      .then(project => {
        commit("updateProjectUpvotes", project);
      });
  }
};

export const mutations = {
  setProject(state, project) {
    state.item = project;
  },
  updateProjectUpvotes(state, project) {
    const indexOfProject = state.items.findIndex(
      item => item._id === project._id
    );
    state.items[indexOfProject].upvotes = project.upvotes;
  }
};
