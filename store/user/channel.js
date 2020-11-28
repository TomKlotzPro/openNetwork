export const state = () => ({
    items: [],
});

export const actions = {
    fetchChannels({ commit }) {
        return this.$axios
            .$get("/api/v1/channel")
            .then(channels => {
                commit("setChannels", channels);
                return state.items;
            })
            .catch(error => {
                Promise.reject(error);
            });
    },
    createChannel({ commit }, channelData) {
        return this.$axios.$post("/api/v1/channel", channelData)
            .then(channel => {
                commit('addChannel', channel)
            })
            .catch(error => Promise.reject(error));;
    },
};

export const mutations = {
    setChannels(state, channels) {
        state.items = channels;
    },
    addChannel(state, channel) {
        state.items.push(channel)
    }
};
