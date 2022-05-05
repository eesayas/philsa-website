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
                <v-card width="374" shadow>
                  <v-img aspect-ratio="1" :src="initiative.Image"> </v-img>
                </v-card>
              </div>
              <div class="col-lg-6 d-flex align-items-center order-lg-1">
                <div>
                  <h4 class="display-1 text-white">{{ initiative.Title }}</h4>
                  <div
                    v-if="initiative.Details"
                    v-html="initiative.Details"
                    class="text-white init-det"
                  ></div>
                  <v-btn color="primary" @click="scrollToEnd">SIGN UP!</v-btn>
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
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    scrollToEnd() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    ...mapActions({
      showInitiative: "initiatives/showInitiative",
    }),
  },
  computed: mapGetters({
    initiative: "initiatives/initiative",
  }),
  created() {
    this.showInitiative(this.$route.params.slug);
  },
};
</script>
<style>
.init-det p {
  font-size: 1.3rem !important;
}
</style>
