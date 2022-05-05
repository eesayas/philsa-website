import PhotoService from "~/services/photos";

export const state = () => ({
  gallery: [],
});

export const getters = {
  gallery: (state) => state.gallery,
};

export const actions = {
  async getPhotos({ commit }) {
    const service = new PhotoService(this.$axios);
    const photos = await service.getPhotos();
    commit("setGallery", photos);
  },
};

export const mutations = {
  setGallery: (state, photos) => (state.gallery = photos),
};
