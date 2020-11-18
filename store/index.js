export const mutations = {
  setItems(state, { resource, items }) {
    state[resource].items = items;
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    // Called on server before page is rendered
    await dispatch("auth/getAuthUser").catch(_ =>
      console.log("Not Authenticatd!")
    );
  }
};
