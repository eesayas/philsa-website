<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2">
          <img :src="about.Main.url" class="img-fluid floating rounded" />
        </div>
        <div class="col-md-6 order-md-1">
          <div class="pr-md-5">
            <h2>{{ about.Title }}</h2>
            <br />
            <div v-if="about.About" v-html="about.About"></div>
            <router-link :to="'/executives/' + year">
              <v-btn color="error">MEET OUR TEAM</v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "about-us",
  computed: {
    ...mapGetters({
      about: "about/about",
      year: "executives/year",
    }),
  },
};
</script>
