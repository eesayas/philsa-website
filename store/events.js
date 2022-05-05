import EventService from "~/services/events";

export const state = () => ({
  events: [],
  event: {
    Image: {
      url: "",
    },
  },
  pageCount: 0,
});

export const getters = {
  events: (state) => state.events,
  event: (state) => state.event,
  pageCount: (state) => state.pageCount,
};

export const actions = {
  async fetchEvents({ commit }, page) {
    const service = new EventService(this.$axios, this.$md);
    const { events, pagination } = await service.fetchEvents(page);

    commit("setEvents", events);
    commit("setPageCount", pagination.pageCount);
  },

  async showEvent({ commit }, slug) {
    const service = new EventService(this.$axios, this.$md);
    const event = await service.showEvent(slug);

    commit("setEvent", event);
  },
};

export const mutations = {
  setEvents: (state, events) => (state.events = events),
  setEvent: (state, event) => (state.event = event),
  setPageCount: (state, pageCount) => (state.pageCount = pageCount),
};
