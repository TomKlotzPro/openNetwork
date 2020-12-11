export const state = () => {
  return {
    items: [],
    item: {}
  }
}

export const actions = {
  fetchProjects({commit}) {
    return this.$axios.$get('/api/v1/products').then(projects => {
      commit('setItems', {resource: 'project', items:projects}, {root: true})
      return state.items
    })
  },
  fetchProjectBySlug({commit, state}, projectSlug) {
    return this.$axios.$get(`/api/v1/products/s/${projectSlug}`)
    .then(project => {
      commit('setProject', project)
      return state.item
    })
    .catch(error => Promise.reject(error))
  }
}

export const mutations = {
  setProject(state, project) {
    state.item = project
  }
}
