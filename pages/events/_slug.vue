<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew alpha-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6 d-flex justify-content-center order-lg-2">
                <v-card width="374" shadow class="mb-auto">
                  <v-img aspect-ratio="1" :src="event.Image"> </v-img>
                </v-card>
                <br />
              </div>
              <div class="col-lg-6 d-flex align-items-center order-lg-1">
                <div>
                  <h4 class="display-1 text-white">{{ event.Title }}</h4>
                  <div
                    v-if="event.Description"
                    v-html="event.Description"
                    class="text-white event-desc"
                  ></div>
                  <v-btn color="primary" @click="scrollToEnd">RSVP</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section section-lg section-contact-us">
      <sign-up-form></sign-up-form>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    scrollToEnd() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    ...mapActions({
      showEvent: "events/showEvent",
    }),
  },
  computed: {
    ...mapGetters({
      event: "events/event",
    }),
  },
  created() {
    this.showEvent(this.$route.params.slug);
  },
};
</script>
<style>
html {
  scroll-behavior: smooth !important;
}
.event-desc p {
  font-size: 1.3rem !important;
}
</style>
