<template>
  <router-link :to="'/initiatives/' + initiative.Slug">
    <v-card
      class="mx-auto my-12"
      :class="[{ 'card-lift--hover': hover }]"
      max-width="374"
      role="button"
    >
      <v-img aspect-ratio="1" :src="initiative.Image"></v-img>

      <v-card-title class="lead m-0">{{ initiative.Title }}</v-card-title>
      <v-card-text class="">
        <div class="text-subtitle-1">
          {{ initiative.Subtitle }}
        </div>
        <p class="pb-0"></p>
      </v-card-text>
    </v-card>
  </router-link>
</template>
<script scoped>
export default {
  name: "init-item",
  props: {
    initiative: {
      type: Object,
    },
    hover: {
      type: Boolean,
    },
  },
};
</script>
