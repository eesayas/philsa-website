import HiglightService from "~/services/highlights";

export const state = () => ({
  highlights: [],
  background: "",
});

export const getters = {
  highlights: (state) => state.highlights,
  background: (state) => state.background,
};

export const actions = {
  async fetchHighlights({ commit }) {
    const service = new HiglightService(this.$axios, this.$md);
    const highlights = await service.fetchHighlights();

    commit("setHighlights", highlights);
  },

  async getHighlightBackground({ commit }) {
    const service = new HiglightService(this.$axios, this.$md);
    const background = await service.getHighlightBackground();

    commit("setBackground", background);
  },
};

export const mutations = {
  setHighlights: (state, highlights) => (state.highlights = highlights),
  setBackground: (state, background) => (state.background = background),
};
