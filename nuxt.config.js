import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - philsa",
    title: "Philippine Students' Association",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no",
        name: "viewport",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The University of Alberta Philippine Students' Association, or PhilSA, is a non-partisan and not-for-profit organization where students, alumni, and staff of the University of Alberta can celebrate Philippine heritage on campus.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
      },
    ],
  },

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/argon-kit.js" },
    { src: "~/plugins/vue-agile.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/moment",
    "@nuxtjs/sitemap",
    "@nuxtjs/markdownit",
  ],

  markdownit: {
    runtime: true,
  },

  sitemap: {
    generate: true,
    hostname: "https://philsa.ca",
  },

  moment: {
    timezone: true,
    defaultTimezone: "America/Denver",
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: "https://dashboard.philsa.ca",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-agile"],
  },
};
