<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img
          src="@/assets/images/philsa_logo.white.png"
          alt="logo"
          style="height: 60px"
        />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <img src="@/assets/images/philsa_logo.dark.png" />
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item">
          <router-link
            slot="title"
            to="/initiatives"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <span class="nav-link-inner--text">Get Involved</span>
          </router-link>
          <router-link
            v-for="initiative in initiatives"
            :key="initiative.Slug"
            :to="'/initiatives/' + initiative.Slug"
            class="dropdown-item"
          >
            {{ initiative.Title }}
          </router-link>
        </base-dropdown>

        <router-link
          slot="title"
          to="/events"
          class="nav-link"
          data-toggle="dropdown"
          role="button"
        >
          <span class="nav-link-inner--text">Events</span>
        </router-link>

        <base-dropdown class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <span class="nav-link-inner--text">Membership</span>
          </a>
          <router-link to="/about-us" class="dropdown-item"
            >About Us</router-link
          >
          <router-link :to="'/executives/' + year" class="dropdown-item"
            >Our Team</router-link
          >
          <router-link to="/executives" class="dropdown-item"
            >Alumni</router-link
          >
          <router-link to="/perks" class="dropdown-item">Perks</router-link>
        </base-dropdown>

        <router-link
          slot="title"
          to="/photo-gallery"
          class="nav-link"
          data-toggle="dropdown"
          role="button"
        >
          <span class="nav-link-inner--text">Photo Gallery</span>
        </router-link>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/uaphilsa"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square" style="font-size: 1.5rem"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/philsa_ualberta/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram" style="font-size: 1.5rem"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/uaphilsa"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square" style="font-size: 1.5rem"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchInitiatives: "initiatives/fetchInitiatives",
      fetchEvents: "events/fetchEvents",
      getExecutiveYear: "executives/getExecutiveYear",
      getAboutUs: "about/getAboutUs",
    }),
  },
  computed: {
    ...mapGetters({
      initiatives: "initiatives/initiatives",
      year: "executives/year",
    }),
  },
  created() {
    this.getExecutiveYear();
    this.fetchInitiatives();
    this.getExecutiveYear();
    this.fetchEvents(1);
    this.getAboutUs();
  },
};
</script>

<style>
.dropdown-menu {
  padding-left: 0 !important;
}
</style>
