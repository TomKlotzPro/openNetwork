export const state = () => ({
  items: [],
  item: {}
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
  createProject(_, projectData) {
    return this.$axios.$post("/api/v1/products", projectData);
  },
  fetchProjectById({commit}, projectId) {
    return this.$axios.$get(`/api/v1/products/${projectId}`).then(project =>{
      commit('setProject', project)
      return state.item
    } )
  },
  updateInput({commit}, {index, payload, field}) {
    commit('setInputValue', {index, payload, field})
  }
};

export const mutations = {
  setProjects(state, projects) {
    state.items = projects;
  },
  setProject(state, project) {
    state.item = project
  },
  addInput(state, field) {
    state.item[field].push({value: ''})
  },
  removeInput(state, {field, index}) {
    state.item[field].splice(index, 1)
  },
  setInputValue(state, {index, payload, field}) {
    state.item[field][index].value = payload
  }
};
