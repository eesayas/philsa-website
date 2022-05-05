<template>
  <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
    <div class="px-4" role="button">
      <img
        :src="perk.Profile.url"
        class="img-center img-fluid shadow shadow-lg--hover rounded"
        style="width: 200px;"
      />
      <div class="pt-4 text-center">
        <h5 class="title">
          <span class="d-block mb-1">{{ perk.Affiliate }}</span>
          <small class="h6 text-muted">{{ perk.Deal }}</small>
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "perk-item",
  props: {
    perk: {
      type: Object,
    },
  },
};
</script>
