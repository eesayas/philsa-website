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
                <h2 class="display-3 text-white">Perks</h2>
                <p class="lead text-white">
                  Enjoy these exclusive deals for PhilSa members!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg">
      <div class="container">
        <card shadow class="card-profile mt--300 p-5 text-center">
          <div class="row d-flex justify-content-center">
            <template v-for="perk in perks">
              <perk-item :key="perk.Affiliate" :perk="perk"></perk-item>
            </template>
          </div>
          <!-- <div class="h5">
            Sign up here
            <a href="https://forms.gle/QNkFbFG4eNjoD5hR7" target="_blank"
              >https://forms.gle/QNkFbFG4eNjoD5hR7</a
            >
          </div> -->
        </card>
      </div>
    </section>

    <contact-info></contact-info>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchPerks: "perks/fetchPerks",
    }),
  },
  computed: {
    ...mapGetters({
      perks: "perks/perks",
    }),
  },
  created() {
    this.fetchPerks();
  },
};
</script>
