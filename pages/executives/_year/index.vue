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
            <div class="row justify-content-center text-center mb-lg">
              <div class="col-lg-8">
                <h2 class="display-3 text-white">Our Team</h2>
                <p class="lead text-white">The executive team for {{ year }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg">
      <div class="container">
        <card shadow class="card-profile mt--300 p-5">
          <div class="row">
            <template v-for="executive in executives">
              <exec-item
                :key="executive.slug"
                :executive="executive"
              ></exec-item>
            </template>
          </div>
        </card>
      </div>
    </section>

    <contact-info></contact-info>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: mapActions({
    fetchExecutives: "executives/fetchExecutives",
  }),
  computed: mapGetters({
    executives: "executives/executives",
    year: "executives/year",
  }),
  created() {
    const { year } = this.$route.params;
    this.fetchExecutives(year);
  },
};
</script>
