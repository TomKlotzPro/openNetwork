export const state = () => ({
    items: [],
    channelId: "",
});

export const actions = {
    setConversations({ commit }, channelId) {
        console.log(channelId)
        return this.$axios
            .$get("/api/v1/channel/conversations/" + channelId)
            .then(conversations => {
                commit("setConversations", conversations);
                commit("setChannelId", channelId);
                return state.items;
            })
            .catch(error => {
                Promise.reject(error);
            });
    },
    createChannel({ commit }, channelData) {
        return this.$axios.$post("/api/v1/channel/conversations", channelData)
            .then(channel => {
                commit('addChannel', channel)
            })
            .catch(error => Promise.reject(error));;
    },
};

export const mutations = {
    setConversations(state, conversations) {
        state.items = conversations;
    },
    setChannelId(state, channelId) {
        state.channelId = channelId
    },
    addChannel(state, channel) {
        state.items.push(channel)
    }
};
