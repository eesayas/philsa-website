import AboutService from "~/services/about";

export const state = () => ({
  about: {
    Main: {
      url: "",
    },
  },
});

export const getters = {
  about: (state) => state.about,
};

export const actions = {
  async getAboutUs({ commit }) {
    const service = new AboutService(this.$axios, this.$md);
    const response = await service.getAboutUs();

    commit("setAbout", response);
  },
};

export const mutations = {
  setAbout: (state, about) => (state.about = about),
};
