<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <v-fade-transition origin="center" mode="out-in" :duration="250">
        <Nuxt />
      </v-fade-transition>
    </v-main> 
  </v-app>
</template>

<script>
import AppHeader from './AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.v-application {
  background-color: transparent;
}
</style>

