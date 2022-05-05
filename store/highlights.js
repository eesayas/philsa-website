import HiglightService from "~/services/highlights";

export const state = () => ({
  highlights: [],
});

export const getters = {
  highlights: (state) => state.highlights,
};

export const actions = {
  async fetchHighlights({ commit }) {
    const service = new HiglightService(this.$axios, this.$md);
    const highlights = await service.fetchHighlights();

    commit("setHighlights", highlights);
  },
};

export const mutations = {
  setHighlights: (state, highlights) => (state.highlights = highlights),
};
