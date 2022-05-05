import InitiativeService from "~/services/initiatives";

export const state = () => ({
  initiatives: [],
  initiative: {
    Image: {
      url: "",
    },
  },
});

export const getters = {
  initiatives: (state) => state.initiatives,
  initiative: (state) => state.initiative,
};

export const actions = {
  async fetchInitiatives({ commit }) {
    const service = new InitiativeService(this.$axios, this.$md);
    const initiatives = await service.fetchInitiatives();

    commit("setInitiatives", initiatives);
  },

  async showInitiative({ commit }, slug) {
    const service = new InitiativeService(this.$axios, this.$md);
    const initiative = await service.showInitiative(slug);

    commit("setInitiative", initiative);
  },
};

export const mutations = {
  setInitiatives: (state, initiatives) => (state.initiatives = initiatives),
  setInitiative: (state, initiative) => (state.initiative = initiative),
};
