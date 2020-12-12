export const state = () => ({
  user: null
});

export const getters = {
  authUser(state) {
    return state.user || null;
  },

  isAuthenticated(state) {
    return !!state.user;
  }
};

export const actions = {
  login({ commit, state }, loginData) {
    return this.$axios
      .$post("/api/v1/users/login", loginData)
      .then(user => {
        commit("setAuthUser", user);
        return state.user;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  register(_, registerData) {
    return this.$axios
      .$post("/api/v1/users/register", registerData)
      .catch(error => Promise.reject(error));
  },
  sendConfirmationEmail(_, email) {
    return this.$axios
      .$post("/api/v1/users/send-confirmation-email", email)
      .catch(error => Promise.reject(error));
  },
  confirmEmail(_, token) {
    return this.$axios
      .$get(`/api/v1/users/confirm/${token}`)
      .then(message => {
        console.log(message)
        return message
      })
      .catch(error => Promise.reject(error));
  },
  logout({ commit }) {
    return this.$axios
      .$post("/api/v1/users/logout")
      .then(() => {
        commit("setAuthUser", null);
        return true;
      })
      .catch(error => Promise.reject(error));
  },
  getAuthUser({ commit, getters }) {
    const authUser = getters.authUser;

    if (authUser) {
      return Promise.resolve(authUser);
    }

    return this.$axios
      .$get("/api/v1/users/me")
      .then(user => {
        commit("setAuthUser", user);
        return state.user;
      })
      .catch(error => {
        commit("setAuthUser", null);
        return Promise.reject(error);
      });
  },
  forgot(_, data) {
    return this.$axios
      .$post("/api/v1/users/forgot", data)
      .catch(error => Promise.reject(error));
  },
  reset(_, data) {
    return this.$axios
      .$post("/api/v1/users/resetPwd/" + data.token, data)
      .catch(error => Promise.reject(error));
  },
};

export const mutations = {
  setAuthUser(state, user) {
    state.user = user;
  }
};
