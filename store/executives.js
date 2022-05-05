import ExecutiveService from "~/services/executives.js";

export const state = () => ({
  alumni: [],
  executives: [],
  executive: {
    Profile: {
      url: "",
    },
  },
  year: "",
});

export const getters = {
  executives: (state) => state.executives,
  executive: (state) => state.executive,
  year: (state) => state.year,
  alumni: (state) => state.alumni,
};

export const actions = {
  async getExecutiveYear({ commit }) {
    const service = new ExecutiveService(this.$axios, this.$md);
    const currentYear = await service.getCurrentYear();

    commit("setExecutiveYear", currentYear);
  },

  async getAlumni({ commit }) {
    const service = new ExecutiveService(this.$axios, this.$md);

    // get oldest year
    const oldest = parseInt(await service.getOldestYear());

    // get curent year
    const current = parseInt(await service.getCurrentYear());

    const alumni = [];

    for (let year = oldest; year < current; year++) {
      const executives = await service.fetchExecutives({
        Year: year.toString(),
      });

      alumni.unshift({
        year: year.toString(),
        executives,
      });
    }

    commit("setAlumni", alumni);
  },

  async fetchExecutives({ commit }, year) {
    const service = new ExecutiveService(this.$axios, this.$md);
    const executives = await service.fetchExecutives({ Year: year });

    commit("setExecutives", executives);
  },

  async showExecutive({ commit }, payload) {
    const service = new ExecutiveService(this.$axios, this.$md);
    const { year, slug } = payload;
    const executive = await service.showExecutive(year, slug);

    commit("setExecutive", executive);
  },
};

export const mutations = {
  setExecutives: (state, executives) => (state.executives = executives),
  setExecutive: (state, executive) => (state.executive = executive),
  setExecutiveYear: (state, year) => (state.year = year),
  setAlumni: (state, alumni) => (state.alumni = alumni),
};
