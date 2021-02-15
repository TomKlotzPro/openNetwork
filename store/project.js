export const state = () => {
  return {
    items: [],
    item: {}
  };
};

const recursiveFind = (replies, id) => {
  if (replies) {
    for (let index = 0; index < replies.length; index++) {
      const reply = replies[index];
      if (reply._id === id) {
        return reply;
      }
      const found = recursiveFind(replies[index].replies, id);
      if (found) return found;
    }
  }
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
  },
  createProjectReview({ commit, state }, projectData) {
    return this.$axios
      .$patch(`/api/v1/products/reviews`, projectData)
      .then(project => {
        return project;
      })
      .catch(error => Promise.reject(error));
  },
  createProjectReviewReply({ commit, state }, projectData) {
    return this.$axios
      .$patch(`/api/v1/products/replies`, projectData)
      .then(project => {
        return project;
      })
      .catch(error => Promise.reject(error));
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
  },
  updateProjectComment(state, { comments, userInfo, text, id }) {
    const comment = recursiveFind(comments, id);
    if (comment) {
      userInfo.comment = text;
      comment.replies.push(userInfo);
    }
  }
};
