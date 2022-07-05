<template>
  <div style="height: 500px">
    <client-only v-if="highlights.length > 0">
      <hooper
        style="height: 100%; padding: 0; margin: 0;"
        :itemsToShow="1.25"
        :centerMode="true"
        :infiniteScroll="true"
        :autoPlay="true"
        :wheelControl="false"
        :playSpeed="3000"
      >
        <slide v-for="highlight in highlights" :key="highlight.Slug">
          <div class="mx-auto rounded" style="width: 98%">
            <v-card :style="{ background: background }">
              <v-img
                height="500"
                contain
                aspect-ratio="1"
                :src="highlight.Image"
              >
                <v-fade-transition>
                  <v-overlay absolute>
                    <v-card-title class="pl-10 text-white">
                      <router-link
                        :to="highlight.Link"
                        class="highlight-link text-truncate"
                      >
                        {{ highlight.Title }}
                      </router-link>
                    </v-card-title>
                    <v-card-subtitle class="pl-10 text-truncate">{{
                      highlight.Subtitle
                    }}</v-card-subtitle>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-card>
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"> </hooper-pagination>
      </hooper>
    </client-only>

    <div v-else class="container shape-container d-flex" style="height: 500px">
      <div class="col px-0 my-auto">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <v-img
              src="https://photos.smugmug.com/photos/i-bzxrsKF/0/240281b0/X3/i-bzxrsKF-X3.png"
            ></v-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data: () => ({
    model: 0,
  }),
  methods: mapActions({
    fetchHighlights: "highlights/fetchHighlights",
    getHighlightBackground: "highlights/getHighlightBackground",
  }),
  computed: {
    center: function() {
      return this.model === 1;
    },
    ...mapGetters({
      highlights: "highlights/highlights",
      background: "highlights/background",
    }),
  },
  created() {
    this.fetchHighlights();
    this.getHighlightBackground();
  },
};
</script>

<style>
.v-overlay {
  height: 25%;
  margin-top: auto;
}
.v-overlay__content {
  width: 100% !important;
  text-align: left;
}

.hooper-indicator {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
  margin: 5px !important;
  background-color: rgb(83, 78, 78) !important;
}

.hooper-indicator.is-active {
  background-color: white !important;
}

.highlight-link {
  color: white !important;
}

.highlight-link:hover {
  text-decoration: underline;
}
</style>
