
const state = () => ({
    
})

const getters = {
}

const mutations = {
    
}

const actions = {
    async signUser({ commit }) {
        const user = await this.$axios.$get('/api/signup')
        user.forEach(todo => commit('addTodo', todo))
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}