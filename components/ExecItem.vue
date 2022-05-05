<template>
  <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
    <div class="px-4" role="button">
      <router-link :to="'/executives/' + executive.Year + '/' + executive.Slug">
        <v-img
          :src="executive.Profile"
          aspect-ratio="1"
          class="rounded-circle shadow shadow-lg--hover"
        ></v-img>
      </router-link>
      <div class="pt-4 text-center">
        <h5 class="title">
          <span class="d-block mb-1">{{ executive.Name }}</span>
          <small class="h6 text-muted">{{ executive.Role }}</small>
        </h5>
        <!-- <div class="mt-3">
                    <base-button tag="a" href="#" type="white" icon="fa fa-twitter" rounded
                                icon-only></base-button>
                    <base-button tag="a" href="#" type="white" icon="fa fa-facebook" rounded
                                icon-only></base-button>
                    <base-button tag="a" href="#" type="white" icon="fa fa-instagram" rounded
                                icon-only></base-button>
                </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exec-item",
  props: {
    executive: {
      type: Object,
    },
  },
  computed: {
    link: () => {
      return `/executives/${executive._id}`;
    },
  },
};
</script>
