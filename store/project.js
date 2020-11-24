export const state = () => {
  return {
    items: []
  }
}

export const actions = {
  fetchProjects({commit}) {
    return this.$axios.$get('/api/v1/products').then(projects => {
      commit('setItems', {resource: 'project', items:projects}, {root: true})
      return state.items
    })
  }
}
