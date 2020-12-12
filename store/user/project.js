export const state = () => ({
  items: [],
  item: {},
  canUpdateProject: false
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
  fetchProjectById({ commit }, projectId) {
    return this.$axios.$get(`/api/v1/products/${projectId}`).then(project => {
      commit("setProject", project);
      return state.item;
    });
  },
  uploadProjectImage({ state, commit }) {
    const file = document.getElementById("file").files;
    const formData = new FormData();
    formData.append("image", file[0])
    const project = state.item;
    return this.$axios
      .$post(`/api/v1/products/${project._id}/add-project-image`, formData)
      .then(data => {
        return data;
      })
      .catch(error => Promise.reject(error));
  },
  updateProject({ state, commit }) {
    const project = state.item;
    return this.$axios
      .$patch(`/api/v1/products/${project._id}`, project)
      .then(project => {
        commit("setProject", project);
        commit("setCanUpdateProject", false)
        return state.item;
      })
      .catch(error => Promise.reject(error));
  },
  // TODO: Cache previous value and verify if we can update project
  // TODO: Set can update only when project values has been updated
  updateInput({ commit }, { index, payload, field }) {
    commit("setInputValue", { index, payload, field });
    commit("setCanUpdateProject", true)
  },
  updateProjectValue({ commit }, { payload, field }) {
    commit("setProjectValue", { payload, field });
    commit("setCanUpdateProject", true)

  },
  updateTags({ commit }, { payload, field }) {
    commit("setTagValue", { payload, field });
    commit("setCanUpdateProject", true)
  },
  removeTag({ commit }, { field, index }) {
    commit("setRemoveTagValue", { field, index });
    commit("setCanUpdateProject", true)
  }
};

export const mutations = {
  setProjects(state, projects) {
    state.items = projects;
  },
  setProject(state, project) {
    state.item = project;
  },
  setProjectValue(state, { payload, field }) {
    state.item[field] = payload;
  },
  addInput(state, field) {
    state.item[field].push({ value: "" });
  },
  removeInput(state, { field, index }) {
    state.item[field].splice(index, 1);
  },
  setInputValue(state, { index, payload, field }) {
    state.item[field][index].value = payload;
  },
  setTagValue(state, { payload, field }) {
    state.item[field].push(payload);
  },
  setRemoveTagValue(state, { field, index }) {
    state.item[field].splice(index, 1);
  },
  setCanUpdateProject(state, canUpdate) {
    state.canUpdateProject = canUpdate;
  }
};
