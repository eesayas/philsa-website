import PerkService from "~/services/perks";

export const state = () => ({
  perks: [],
});

export const getters = {
  perks: (state) => state.perks,
};

export const actions = {
  async fetchPerks({ commit }) {
    const service = new PerkService(this.$axios);
    const perks = await service.fetchPerks();

    commit("setPerks", perks);
  },
};

export const mutations = {
  setPerks: (state, perks) => (state.perks = perks),
};
