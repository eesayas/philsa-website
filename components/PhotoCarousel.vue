<template>
  <div class="mb-0">
    <div style="height: 700px">
      <client-only>
        <hooper
          group="group1"
          style="height: 100%; padding: 0; margin: 0;"
          :itemsToShow="1"
          :centerMode="true"
          :infiniteScroll="true"
          :autoPlay="true"
          :wheelControl="false"
          :hoverPause="false"
          :playSpeed="3000"
        >
          <slide
            v-for="(slide, index) in photos"
            :key="index"
            :itemsToSlide="1"
            style="background: #000"
            class="d-flex"
          >
            <v-img height="680" contain :src="slide" class="my-auto"> </v-img>
          </slide>

          <hooper-navigation slot="hooper-addons">
            <button slot="hooper-prev">
              <svg
                class="icon icon-arrowLeft"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <title>Arrow Left</title>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <button slot="hooper-next">
              <svg
                class="icon icon-arrowRight"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <title>Arrow Right</title>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </hooper-navigation>
        </hooper>
      </client-only>
    </div>
    <div>
      <hooper
        group="group1"
        :itemsToShow="4"
        :centerMode="true"
        :infiniteScroll="true"
        :wheelControl="false"
        :hoverPause="false"
        style="z-index: 9999999"
      >
        <slide
          v-for="(slide, index) in photos"
          :key="index"
          role="button"
          style="overflow: hidden"
        >
          <v-img aspect-ratio="1" :src="slide"> </v-img>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  methods: mapActions({
    getPhotos: "photos/getPhotos",
  }),
  computed: mapGetters({
    photos: "photos/gallery",
  }),
  created() {
    this.getPhotos();
  },
};
</script>
<style>
.hooper-track {
  padding-left: 0 !important;
}
.svg.icon.icon-arrowRight {
  fill: #fff !important;
}
</style>
