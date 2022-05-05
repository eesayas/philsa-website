import SignUpService from "../services/signups";

export const state = () => ({
  signedUp: false,
});

export const getters = {
  signedUp: (state) => state.signedUp,
};

export const actions = {
  async createSignup({ commit }, signup) {
    const service = new SignUpService(this.$axios);
    await service.createSignUp(signup);
    commit("setSignedUp", true);
  },
};

export const mutations = {
  setSignedUp: (state, signedUp) => (state.signedUp = signedUp),
};
