<template>
  <div>
    <div class="position-relative">
      <section class="section-profile-cover section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew alpha-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <h1 class="display-3 text-white text-center w-100">
                Events
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section section-lg pt-lg-0" style="margin-top: -250px;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <template v-for="event in events">
                <div class="col-lg-4" :key="event.Slug">
                  <event-item hover :event="event"></event-item>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
        circle
      ></v-pagination>
    </section>

    <contact-info></contact-info>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: mapActions({
    fetchEvents: "events/fetchEvents",
  }),
  computed: mapGetters({
    events: "events/events",
    pageCount: "events/pageCount",
  }),
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page(newPage, oldPage) {
      if (newPage !== oldPage) {
        this.fetchEvents(newPage);
      }
    },
  },
};
</script>
<style scoped></style>
