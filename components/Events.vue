<template>
  <section class="section section-lg">
    <h3 class="text-center">OUR EVENTS</h3>
    <br />
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
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "events",
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
<style scoped>
.section {
  background-color: #f4f5f7 !important;
}
</style>
