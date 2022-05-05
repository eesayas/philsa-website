<template>
  <div>
    <div class="profile-page">
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
      </section>
      <section class="section section-skew">
        <div class="container">
          <card shadow class="card-profile mt--300" no-body>
            <div class="px-4">
              <div class="row justify-content-center">
                <div class="col-lg-3">
                  <div class="card-profile-image" style="transform: scale(1.2)">
                    <v-img
                      :src="executive.Profile"
                      aspect-ratio="1"
                      class="rounded-circle"
                      style="max-width: 180px; transform: translate(-50%,-30%);left: 50%;"
                    ></v-img>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <h3>{{ executive.Name }}</h3>
                <div class="h6">
                  {{ executive.Role }}
                  {{ executive.Year === year ? "" : executive.Year }}
                </div>
              </div>
              <div class="mt-5 py-5 border-top">
                <div class="row justify-content-center">
                  <div
                    class="col-lg-9 exec-bio"
                    v-if="executive.Bio"
                    v-html="executive.Bio"
                  ></div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </section>
    </div>
    <contact-info></contact-info>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: mapActions({
    showExecutive: "executives/showExecutive",
  }),
  computed: mapGetters({
    executive: "executives/executive",
    year: "executives/year",
  }),
  created() {
    const { year, slug } = this.$route.params;
    this.showExecutive({ year, slug });
  },
};
</script>
<style scoped>
.v-image__image {
  max-width: 180px !important;
}
</style>

<style>
.exec-bio img {
  width: 80%;
  margin: 0 10%;
}
</style>
