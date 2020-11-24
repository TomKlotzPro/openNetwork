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
  getProjectImage({ state, commit }, imageName) {
    console.log('IMAGE : ', imageName)
    return this.$axios.$get(`/api/v1/products/image`, {
      params: {
        'image' : `${imageName}`,
      }
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
  updateProject({ state, commit }) {
    const file = document.getElementById("file").files;
    const formData = new FormData();
    const project = state.item;

    if (file) {
      formData.append("file", file[0]);
      formData.append("projectId", project._id);
      this.$axios
        .$patch(`/api/v1/products/upload`, formData)
        .then(result => {
          console.log(result);
        })
        .catch(error => Promise.reject(error));
    }
    console.log("Check Product Image : ", project.image);
    return this.$axios
      .$patch(`/api/v1/products/${project._id}`, project)
      .then(project => {
        commit("setProject", project);
        return state.item;
      })
      .catch(error => Promise.reject(error));
  },
  updateInput({ commit }, { index, payload, field }) {
    commit("setInputValue", { index, payload, field });
  },
  updateProjectValue({ commit }, { payload, field }) {
    commit("setProjectValue", { payload, field });
  },
  updateTags({ commit }, { payload, field }) {
    commit("setTagValue", { payload, field });
  },
  removeTag({ commit }, { field, index }) {
    commit("setRemoveTagValue", { field, index });
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
  }
};
