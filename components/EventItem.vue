<template>
  <router-link :to="'/events/' + event.Slug">
    <v-card
      class="mx-auto my-12"
      :class="[{ 'card-lift--hover': hover }]"
      max-width="374"
      role="button"
    >
      <v-img aspect-ratio="1" :src="event.Image"></v-img>

      <v-card-title class="lead m-0">{{ event.Title }}</v-card-title>
      <v-card-text class="">
        <div class="text-subtitle-1">
          {{ $moment(event.Start).format("MMMM DD, YYYY • h:mm a") }}
        </div>
        <p class="pb-0 text-truncate">
          {{ event.Subtitle }}
        </p>
      </v-card-text>
    </v-card>
  </router-link>
</template>
<script>
export default {
  name: "event-item",
  props: {
    event: {
      type: Object,
    },
    hover: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
